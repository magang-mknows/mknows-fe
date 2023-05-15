import { FC, ReactElement } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  UploadField,
  Button,
} from '@mknows-frontend-services/components/atoms';
import { Accordion } from '@mknows-frontend-services/components/molecules';
import { IconNotif } from '../../../../components/atoms';

const AiIdentityScoring: FC = (): ReactElement => {
  const MAX_FILE_SIZE = 300000;
  const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
  const validationSchema = z.object({
    image_ktp: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (files: File[]) =>
          files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        'Ukuran maksimun adalah 3mb.'
      )
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_selfie: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_surat_nomor_induk_berusaha: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_surat_izin_usaha_perdagangan: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_surat_nomor_akta_notaris: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_surat_keterangan_domisili_usaha: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_surat_nomor_pokok_wajib_pajak: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_surat_tanda_daftar_perusahaan: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
  });

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(validationSchema),
    mode: 'all',
  });

  const onSubmit = handleSubmit(() => {
    console.log('ok');
  });

  const upload = [
    {
      name: 'image_ktp',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Kartu Tanda Penduduk (KTP)',
      notif:
        '*Pastikan foto KTP dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_selfie',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Foto Selfi Diri',
      notif:
        '*Pastikan wajah Anda dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_surat_nomor_induk_berusaha',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Nomor Induk Berusaha',
      notif:
        '*Pastikan foto Surat Nomor Induk Berusha dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_surat_izin_usaha_perdagangan',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Izin Usaha Perdagangan',
      notif:
        '*Pastikan foto Surat Izin Usaha Perdagangan dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_surat_nomor_akta_notaris',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Nomor Akta Notaris',
      notif:
        '*Pastikan foto Surat Nomor Akta Notaris dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_surat_keterangan_domisili_usaha',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Keterangan Domisili Usaha',
      notif:
        '*Pastikan foto Surat Keterangan Domisili Usaha dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_surat_nomor_pokok_wajib_pajak',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Nomor Pokok Wajib Pajak',
      notif:
        '*Pastikan foto Surat Nomor Pokok Wajib Pajak dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_surat_tanda_daftar_perusahaan',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Tanda Daftar Perusahaan ',
      notif:
        '*Pastikan foto Surat Tanda Daftar Perusahaan dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
  ];

  return (
    <div>
      <Accordion title="Ai Identity Scoring" idAccordion={'file information'}>
        <form onSubmit={onSubmit}>
          {upload.map((x, i) => (
            <div className="py-2" key={i}>
              <div className="flex gap-4">
                <div className="w-[95%] ">
                  <UploadField
                    variant={'md'}
                    message={''}
                    status={'none'}
                    {...x}
                  />
                </div>
                <div className="flex group flex-col gap-2">
                  <button className="flex justify-end items-center rounded-full text-center text-white font-bold p-4 text-[20px] w-10 h-10 bg-gray-200 mt-8 group-hover:bg-primary-300">
                    ?
                  </button>
                  <p className="text-[10px] p-1 font-bold bg-white group-hover:bg-primary-300 text-white rounded-md w-[80px] text-center justify-center ">
                    Lihat Contoh
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between pr-8">
                <p className="text-xs">{x.notif}</p>
                <div className="flex gap-2">
                  <IconNotif />
                  <p className="text-xs font-bold ">Max 3.MB</p>
                </div>
              </div>
            </div>
          ))}

          <div className="flex w-full my-8 justify-end">
            <Button
              disabled={!isValid}
              className="my-4 w-[200px] rounded-[8px] disabled:bg-gray-300 disabled:text-gray-100 bg-primary-300 text-white font-bold p-3 text-1xl"
              type={'submit'}
            >
              Simpan
            </Button>
          </div>
        </form>
      </Accordion>
    </div>
  );
};

export default AiIdentityScoring;
