import { FC, ReactElement } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  UploadField,
  Button,
} from '@mknows-frontend-services/components/atoms';
import { Accordion } from '@mknows-frontend-services/components/molecules';
import IconDownload from '../../../../components/atoms/icons/ic-download';
import IconUpload from '../../../../components/atoms/icons/ic-upload';

const AiCapabilityScoring: FC = (): ReactElement => {
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

    image_credit_applicant: z
      .any()
      .refine((file) => file?.size <= MAX_FILE_SIZE, 'Max image size is 5MB.')
      .refine(
        (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
        'Only .jpg, .jpeg, and .png formats are supported'
      ),

    image_laporan_keuangan: z
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
      name: 'image_suratNomorIndukBerusaha',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Nomor Induk Berusaha',
      notif:
        '*Pastikan foto Surat Nomor Induk Berusha dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_suratIzinUsahaPerdagangan',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Izin Usaha Perdagangan',
      notif:
        '*Pastikan foto Surat Izin Usaha Perdagangan dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_suratNomorAktaNotaris',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Nomor Akta Notaris',
      notif:
        '*Pastikan foto Surat Nomor Akta Notaris dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_suratKeteranganDomisiliUsaha',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Keterangan Domisili Usaha',
      notif:
        '*Pastikan foto Surat Keterangan Domisili Usaha dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_suratNomorPokokWajbPajak',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Nomor Pokok Wajib Pajak',
      notif:
        '*Pastikan foto Surat Nomor Pokok Wajib Pajak dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_suratTandaDaftarPerusahaan',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Surat Tanda Daftar Perusahaan',
      notif:
        '*Pastikan foto Surat Tanda Daftar Perusahaan dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_creditApplicant',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Form Credit Applicant',
      notif:
        '*Pastikan Form Credit Applicant dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
    {
      name: 'image_laporanKeuangan',
      hasLabel: true,
      control,
      required: true,
      accepted: '.jpg, .jpeg, .png',
      label: 'Laporan Keuangan',
      notif:
        '*Pastikan Laporan Keuangan dapat terlihat dengan jelas dan pencahayaan yang baik',
    },
  ];
  return (
    <div>
      <Accordion title="Ai Capability Scoring" idAccordion={'file information'}>
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
            <div key={i} className="flex relative w-full flex-col py-4">
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
              <div className="flex order-2 absolute w-[88%] justify-between pt-20 my-2 text-gray-500">
                <p className="text-xs">{x.notif}</p>
                <div className="flex gap-2">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.99974 0.333008C3.31974 0.333008 0.333069 3.31967 0.333069 6.99967C0.333069 10.6797 3.31974 13.6663 6.99974 13.6663C10.6797 13.6663 13.6664 10.6797 13.6664 6.99967C13.6664 3.31967 10.6797 0.333008 6.99974 0.333008ZM7.6664 10.333H6.33307V6.33301H7.6664V10.333ZM7.6664 4.99967H6.33307V3.66634H7.6664V4.99967Z"
                      fill="#787878"
                    />
                  </svg>
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

export default AiCapabilityScoring;
