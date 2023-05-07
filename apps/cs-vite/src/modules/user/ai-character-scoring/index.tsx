import { FC, ReactElement } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  UploadField,
  Button,
} from '@mknows-frontend-services/components/atoms';
import { Accordion } from '@mknows-frontend-services/components/molecules';
import IconUpload from '../../../components/atoms/icons/ic-upload';
import IconDownload from '../../../components/atoms/icons/ic-download';

const AiCharacterScoring: FC = (): ReactElement => {
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
    image_selfie: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_suratLaporanKeuangan: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_creditApplicant: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_suratKepemilikanKendaraan: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_suratKepemilikanRumah: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),
    image_notaSaham: z
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
    {
      name: 'image_suratLaporanKeuangan',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Laporan Keuangan',
    },
    {
      name: 'image_creditApplicant',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Form Credit Applicant',
    },
    {
      name: 'image_suratKepemilikanKendaraan',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Kepemilikan Kendaraan',
    },
    {
      name: 'image_suratKepemilikanRumah',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Sertifikat Kepemilikan Rumah',
    },
    {
      name: 'image_notaSaham',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Nota Kepemilikan Saham/Dana Tabungan',
    },
  ];
  return (
    <div>
      <Accordion title="Ai Character Scoring" idAccordion={'file information'}>
        <div className="flex flex-col border border-dashed w-full h-24 rounded-md items-center text-center justify-center">
          <div className="flex w-8 h-8 justify-center bg-gray-100 items-center rounded-full">
            <IconUpload />
          </div>
          <div className="flex gap-2 py-2 cursor-pointer">
            <p className=" underline">Click to upload</p>
            <span className="text-gray-500">or drag and drop</span>
          </div>
        </div>
        <div className="flex justify-between gap-2 py-2 pb-10">
          <div className="flex cursor-pointer">
            <IconDownload />
            <p className="text-[#3D628D] font-bold cursor-auto">
              Unduh templete dokumen
            </p>
          </div>
          <div>
            <p className="text-xs py-2 text-gray-500">
              XLS, XLSX(MAXIMUM SIZE:50 MB)
            </p>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          {upload.map((x, i) => (
            <div key={i} className="flex gap-4">
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

export default AiCharacterScoring;
