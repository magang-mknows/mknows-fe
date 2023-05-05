import { FC, ReactElement } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  UploadField,
  Button,
} from '@mknows-frontend-services/components/atoms';
import { Accordion } from '@mknows-frontend-services/components/molecules';

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

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      image_ktp: '',
      image_suratIzinUsahaPerdagangan: '',
      image_suratKeteranganDomisiliUsaha: '',
      image_suratNomorAktaNotaris: '',
      image_suratNomorIndukBerusaha: '',
      image_suratNomorPokokWajibPajak: '',
      image_suratTandaDaftarPerusahaan: '',
      image_selfie: '',
      image_suratLaporanKeuangan: '',
      image_creditApplicant: '',
      image_suratKepemilikanKendaraan: '',
      image_suratKepemilikanRumah: '',
      image_notaSaham: '',
    },
  });
  return (
    <div>
      <Accordion title="Ai Character Scoring" idAccordion={'file information'}>
        <UploadField
          name={'image_ktp'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Kartu Tanda Penduduk (KTP)'}
        />

        <UploadField
          name={'image_suratNomorIndukBerusaha'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Surat Nomor Induk Berusaha'}
        />
        <UploadField
          name={'image_suratIzinUsahaPerdagangan'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Surat Izin Usaha Perdagangan'}
        />
        <UploadField
          name={'image_suratNomorAktaNotaris'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Surat Nomor Akta Notaris'}
        />
        <UploadField
          name={'image_suratKeteranganDomisiliUsaha'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Surat Keterangan Domisili Usaha'}
        />
        <UploadField
          name={'image_suratNomorPokokWajibPajak'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Surat Nomor Pokok Wajib Pajak'}
        />
        <UploadField
          name={'image_suratTandaDaftarPerusahaan'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Surat Tanda Daftar Perusahaan'}
        />
        <UploadField
          name={'image_selfie'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Foto Selfi Diri'}
        />
        <UploadField
          name={'image_suratLaporanKeuangan'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Foto Laporan Keuangan'}
        />
        <UploadField
          name={'image_creditApplicant'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Form Credit Applicant'}
        />
        <UploadField
          name={'image_suratKepemilikanKendaraan'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Surat Kepemilikan Rumah'}
        />
        <UploadField
          name={'image_suratKepemilikanKendaraan'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Surat Kepemilikan Rumah'}
        />
        <UploadField
          name={'image_suratKepemilikanRumah'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Sertifikat Kepemilikan Rumah'}
        />
        <UploadField
          name={'image_notaSaham'}
          hasLabel
          control={control}
          required
          accepted=".jpg, .jpeg, .png"
          label={'Nota Kepemilikan Saham/Dana Tabungan'}
        />
        <div className="flex w-full my-8 justify-end">
          <Button
            disabled={!isValid}
            className="my-4 w-[200px] rounded-[8px] disabled:bg-gray-300 disabled:text-gray-100 bg-primary-300 text-white font-bold p-3 text-1xl"
            type={'submit'}
          >
            Simpan
          </Button>
        </div>
      </Accordion>
    </div>
  );
};

export default AiCharacterScoring;
