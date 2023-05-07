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
          <div className="flex gap-2 py-2">
            <p className=" underline">Click to upload</p>
            <span className="text-gray-500">or drag and drop</span>
          </div>
        </div>
        <div className="flex gap-2 py-2 pb-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.758 5.23685C10.758 4.55106 11.314 3.99512 11.9998 3.99512C12.6856 3.99512 13.2415 4.55106 13.2415 5.23685V11.0427C13.2415 11.1311 13.3132 11.2028 13.4016 11.2028H15.1044C15.3477 11.2029 15.5685 11.345 15.6694 11.5664C15.7703 11.7877 15.7327 12.0476 15.5732 12.2313L12.4685 15.8022C12.3507 15.9381 12.1796 16.0161 11.9998 16.0161C11.8199 16.0161 11.6489 15.9381 11.531 15.8022L8.42634 12.2313C8.26683 12.0476 8.22922 11.7877 8.33012 11.5664C8.43101 11.345 8.65184 11.2029 8.89511 11.2028H10.5979C10.6864 11.2028 10.758 11.1311 10.758 11.0427V5.23685ZM18.0547 15.6184C18.0547 15.1897 18.4023 14.8422 18.8309 14.8422C19.0373 14.8414 19.2356 14.9228 19.3818 15.0684C19.5281 15.2141 19.6103 15.412 19.6103 15.6184V16.8063C19.6103 18.2211 18.4634 19.3679 17.0487 19.3679H6.95085C5.53737 19.3662 4.39246 18.2198 4.39246 16.8063V15.6184C4.39246 15.1897 4.73996 14.8422 5.16862 14.8422C5.59728 14.8422 5.94479 15.1897 5.94479 15.6184V16.8063C5.94549 17.3616 6.39561 17.8114 6.95085 17.8117H17.0487C17.6039 17.8114 18.054 17.3616 18.0547 16.8063V15.6184Z"
              fill="#3D628D"
            />
            <mask
              id="mask0_2710_9439"
              maskUnits="userSpaceOnUse"
              x="4"
              y="3"
              width="16"
              height="17"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.758 5.23685C10.758 4.55106 11.314 3.99512 11.9998 3.99512C12.6856 3.99512 13.2415 4.55106 13.2415 5.23685V11.0427C13.2415 11.1311 13.3132 11.2028 13.4016 11.2028H15.1044C15.3477 11.2029 15.5685 11.345 15.6694 11.5664C15.7703 11.7877 15.7327 12.0476 15.5732 12.2313L12.4685 15.8022C12.3507 15.9381 12.1796 16.0161 11.9998 16.0161C11.8199 16.0161 11.6489 15.9381 11.531 15.8022L8.42634 12.2313C8.26683 12.0476 8.22922 11.7877 8.33012 11.5664C8.43101 11.345 8.65184 11.2029 8.89511 11.2028H10.5979C10.6864 11.2028 10.758 11.1311 10.758 11.0427V5.23685ZM18.0547 15.6184C18.0547 15.1897 18.4023 14.8422 18.8309 14.8422C19.0373 14.8414 19.2356 14.9228 19.3818 15.0684C19.5281 15.2141 19.6103 15.412 19.6103 15.6184V16.8063C19.6103 18.2211 18.4634 19.3679 17.0487 19.3679H6.95085C5.53737 19.3662 4.39246 18.2198 4.39246 16.8063V15.6184C4.39246 15.1897 4.73996 14.8422 5.16862 14.8422C5.59728 14.8422 5.94479 15.1897 5.94479 15.6184V16.8063C5.94549 17.3616 6.39561 17.8114 6.95085 17.8117H17.0487C17.6039 17.8114 18.054 17.3616 18.0547 16.8063V15.6184Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_2710_9439)"></g>
          </svg>
          <p className="text-[#3D628D] font-bold">Unduh templete dokumen</p>
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
