import { FC, ReactElement } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  UploadField,
  Button,
} from '@mknows-frontend-services/components/atoms';
import { Accordion } from '@mknows-frontend-services/components/molecules';

const AiIdentityScoring: FC = (): ReactElement => {
  const MAX_FILE_SIZE = 300000;
  const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png'];
  const validationSchema = z.object({
    image_ktp: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
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
    image_suratNomorIndukBerusaha: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_suratIzinUsahaPerdagangan: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_suratNomorAktaNotaris: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_suratKeteranganDomisiliUsaha: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_suratNomorPokokWajibPajak: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_suratTandaDaftarPerusahaan: z
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
    },
    {
      name: 'image_selfie',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Foto Selfi Diri',
    },
    {
      name: 'image_suratNomorIndukBerusaha',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Nomor Induk Berusaha',
    },
    {
      name: 'image_suratIzinUsahaPerdagangan',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Izin Usaha Perdagangan',
    },
    {
      name: 'image_suratNomorAktaNotaris',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Nomor Akta Notaris',
    },
    {
      name: 'image_suratKeteranganDomisiliUsaha',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Keterangan Domisili Usaha',
    },
    {
      name: 'image_suratNomorPokokWajibPajak',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Nomor Pokok Wajib Pajak',
    },
    {
      name: 'image_suratTandaDaftarPerusahaan',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Tanda Daftar Perusahaan ',
    },
  ];

  return (
    <div>
      <Accordion title="Ai Identity Scoring" idAccordion={'file information'}>
        <form onSubmit={onSubmit}>
          {upload.map((x, i) => (
            <div key={i} className="flex flex-col py-4">
              <div className="flex gap-4">
                <div className="flex w-full">
                  <UploadField {...x} />
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
              <div className="flex absolute  pt-20 my-2">
                <p className="text-xs text-gray-400">
                  *Pastikan ktp terlihat jelas
                </p>
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
