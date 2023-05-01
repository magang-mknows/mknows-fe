import { FC, ReactElement } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  useAdministrationStatus,
  useFileInformationStatus,
  usePrivateInformationStatus,
  useJobInformationStatus,
} from './hooks';
import {
  Button,
  UploadField,
} from '@mknows-frontend-services/components/atoms';
import { Accordion } from '@mknows-frontend-services/components/molecules';

export const FileInformation: FC = (): ReactElement => {
  const { setAdministrationStatus } = useAdministrationStatus();
  const { setFileStatus, getFileStatus } = useFileInformationStatus();

  const { getJobStatus } = useJobInformationStatus();
  const { getPrivateStatus } = usePrivateInformationStatus();

  const MAX_FILE_SIZE = 3000000;
  const ACCEPTED_IMAGE_TYPES = [
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'application/pdf',
  ];
  const ACCEPTED_PDF_TYPES = ['application/pdf'];

  const validationSchema = z.object({
    upload_ktp: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        'Harus ada file yang di upload.'
      )
      .refine(
        (files: File[]) =>
          files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        'Ukuran maksimun adalah 3mb.'
      )
      .refine(
        (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
        'hanya menerima .jpg, .jpeg, dan .webp.'
      ),
    upload_certificate: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        'Harus ada file yang di upload.'
      )
      .refine(
        (files: File[]) =>
          files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        'Ukuran maksimun adalah 3mb.'
      )
      .refine(
        (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0].type),
        'hanya menerima .pdf'
      ),
    upload_famillyCard: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        'Harus ada file yang di upload.'
      )
      .refine(
        (files: File[]) =>
          files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        'Ukuran maksimun adalah 3mb.'
      )
      .refine(
        (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
        'hanya menerima .jpg, .jpeg, dan .webp.'
      ),
    upload_photo: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        'Harus ada file yang di upload.'
      )
      .refine(
        (files: File[]) =>
          files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        'Ukuran maksimun adalah 3mb.'
      )
      .refine(
        (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
        'hanya menerima .jpg, .jpeg, dan .webp.'
      ),
    upload_transcript: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        'Harus ada file yang di upload.'
      )
      .refine(
        (files: File[]) =>
          files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        'Ukuran maksimun adalah 3mb.'
      )
      .refine(
        (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0].type),
        'hanya menerima .pdf'
      ),
    upload_recommendationLetter: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        'Harus ada file yang di upload.'
      )
      .refine(
        (files: File[]) =>
          files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        'Ukuran maksimun adalah 3mb.'
      )
      .refine(
        (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0].type),
        'hanya menerima .pdf'
      ),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm<ValidationSchema>({
    mode: 'all',
    resolver: zodResolver(validationSchema),
    defaultValues: {
      upload_ktp: undefined,
      upload_certificate: undefined,
      upload_famillyCard: undefined,
      upload_photo: undefined,
      upload_transcript: undefined,
      upload_recommendationLetter: undefined,
    },
  });

  const onSubmit = handleSubmit(() => {
    try {
      setAdministrationStatus('finished');
      setFileStatus(true);
    } catch (err) {
      setFileStatus(false);
    }
  });

  console.log(watch());

  return (
    <>
      <Accordion
        title="Informasi Berkas"
        idAccordion={getFileStatus ? '' : 'file-information'}
        disabled={
          getPrivateStatus
            ? getJobStatus
              ? getFileStatus
                ? true
                : false
              : true
            : true
        }
      >
        <form onSubmit={onSubmit}>
          <UploadField
            hasLabel
            control={control}
            required
            name={'upload_ktp'}
            accepted=".jpg, .jpeg, .pdf"
            label={'Kartu Tanda Penduduk (KTP)'}
          />

          <UploadField
            hasLabel
            control={control}
            required
            name={'upload_certificate'}
            accepted=".pdf"
            label={'Ijazah terakhir'}
          />
          <UploadField
            hasLabel
            control={control}
            required
            name={'upload_famillyCard'}
            accepted=".jpg, .jpeg, .pdf"
            label={'Kartu Keluarga (KK)'}
          />

          <UploadField
            hasLabel
            control={control}
            required
            name={'upload_photo'}
            accepted=".jpg, .jpeg, .pdf"
            label={'Pas Foto'}
          />
          <UploadField
            hasLabel
            control={control}
            required
            name={'upload_transcript'}
            accepted=".pdf"
            label={'Transkrip Nilai Terbaru'}
          />
          <UploadField
            hasLabel
            control={control}
            required
            name={'upload_recommendationLetter'}
            accepted=".pdf"
            label={'Surat Rekomendasi'}
          />

          <div className="flex w-full my-8 justify-end">
            <Button
              disabled={!isValid}
              className="my-4 w-[211px] rounded-[8px] disabled:bg-gray-400 disabled:text-gray-200 bg-blue-600 text-white font-bold p-3 text-1xl"
              type={'submit'}
            >
              Simpan Informasi Berkas
            </Button>
          </div>
        </form>
      </Accordion>
    </>
  );
};
