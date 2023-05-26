import { FC, ReactElement } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  useAdministrationStatus,
  useFileInformationStatus,
  usePrivateInformationStatus,
  useJobInformationStatus,
  useFileInformation,
} from "./hooks";
import { Button, UploadField } from "@mknows-frontend-services/components/atoms";
import { Accordion } from "@mknows-frontend-services/components/molecules";

export const FileInformation: FC = (): ReactElement => {
  const { setAdministrationStatus } = useAdministrationStatus();
  const { setFileStatus, getFileStatus } = useFileInformationStatus();
  const { getJobStatus } = useJobInformationStatus();
  const { getPrivateStatus } = usePrivateInformationStatus();
  const MAX_FILE_SIZE = 3000000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/webp", "application/pdf"];
  const ACCEPTED_PDF_TYPES = ["application/pdf"];

  const validationSchema = z.object({
    id_card: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        "Harus ada file yang di upload.",
      )
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
        "hanya menerima .jpg, .jpeg, dan .webp.",
      ),
    diploma_certificate: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        "Harus ada file yang di upload.",
      )
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0].type),
        "hanya menerima .pdf",
      ),
    family_card: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        "Harus ada file yang di upload.",
      )
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
        "hanya menerima .jpg, .jpeg, dan .webp.",
      ),
    photo: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        "Harus ada file yang di upload.",
      )
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => ACCEPTED_IMAGE_TYPES.includes(files?.[0].type),
        "hanya menerima .jpg, .jpeg, dan .webp.",
      ),
    transcript: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        "Harus ada file yang di upload.",
      )
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0].type),
        "hanya menerima .pdf",
      ),
    letter_of_recommendation: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.length >= 1,
        "Harus ada file yang di upload.",
      )
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => ACCEPTED_PDF_TYPES.includes(files?.[0].type),
        "hanya menerima .pdf",
      ),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;
  const { mutate } = useFileInformation();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
    watch,
  } = useForm<ValidationSchema>({
    mode: "all",
    resolver: zodResolver(validationSchema),
    defaultValues: {
      id_card: undefined,
      diploma_certificate: undefined,
      family_card: undefined,
      photo: undefined,
      transcript: undefined,
      letter_of_recommendation: undefined,
    },
  });

  const onSubmit = handleSubmit((data) => {
    try {
      mutate(
        {
          ...data,
          id_card: data.id_card[0] as File,
          diploma_certificate: data.diploma_certificate[0] as File,
          family_card: data.family_card[0] as File,
          photo: data.photo[0] as File,
          transcript: data.transcript[0] as File,
          letter_of_recommendation: data.letter_of_recommendation[0] as File,
        },
        {
          onSuccess: () => {
            setFileStatus(true);
            setAdministrationStatus("finished");
            setFileStatus(true);
          },
        },
      );
    } catch (err) {
      setFileStatus(false);
    }
  });

  console.log(watch());

  return (
    <>
      <Accordion
        title="Informasi Berkas"
        idAccordion={getFileStatus ? "" : "file-information"}
        disabled={getPrivateStatus ? (getJobStatus ? (getFileStatus ? true : false) : true) : true}
      >
        <form onSubmit={onSubmit}>
          <UploadField
            control={control}
            required
            name={"id_card"}
            accepted=".jpg, .jpeg, .pdf"
            label={"Kartu Tanda Penduduk (KTP)"}
            variant={"md"}
            message={errors.id_card?.message?.toString()}
            status={errors.id_card ? "error" : "none"}
          />

          <UploadField
            variant="md"
            control={control}
            required
            name={"diploma_certificate"}
            accepted=".pdf"
            label={"Ijazah terakhir"}
            message={errors.diploma_certificate?.message?.toString()}
            status={errors.diploma_certificate ? "error" : "none"}
          />
          <UploadField
            variant="md"
            control={control}
            required
            name={"family_card"}
            accepted=".jpg, .jpeg, .pdf"
            label={"Kartu Keluarga (KK)"}
            message={errors.family_card?.message?.toString()}
            status={errors.family_card ? "error" : "none"}
          />

          <UploadField
            variant="md"
            control={control}
            required
            name={"photo"}
            accepted=".jpg, .jpeg, .pdf"
            label={"Pas Foto"}
            message={errors.photo?.message?.toString()}
            status={errors.photo ? "error" : "none"}
          />
          <UploadField
            variant="md"
            control={control}
            required
            name={"transcript"}
            accepted=".pdf"
            label={"Transkrip Nilai Terbaru"}
            message={errors.transcript?.message?.toString()}
            status={errors.transcript ? "error" : "none"}
          />
          <UploadField
            variant="md"
            control={control}
            required
            name={"letter_of_recommendation"}
            accepted=".pdf"
            label={"Surat Rekomendasi"}
            message={errors.letter_of_recommendation?.message?.toString()}
            status={errors.letter_of_recommendation ? "error" : "none"}
          />

          <div className="flex w-full my-8 justify-end">
            <Button
              disabled={!isValid}
              className="my-4 w-[211px] rounded-[8px] disabled:bg-[#c5c3c3] disabled:text-white bg-[#106FA4] text-white font-bold p-3 text-1xl"
              type={"submit"}
            >
              Simpan Informasi Berkas
            </Button>
          </div>
        </form>
      </Accordion>
    </>
  );
};
