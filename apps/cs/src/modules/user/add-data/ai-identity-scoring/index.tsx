import { FC, ReactElement } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldError, FieldErrorsImpl, Merge, useForm } from "react-hook-form";
import { UploadField, Button } from "@mknows-frontend-services/components/atoms";
import { Accordion } from "@mknows-frontend-services/components/molecules";
import { IconNotif } from "../../../../components/atoms";
import { useCategoryStatus, useIdentityStatus } from "../../hooks";
import { useIdentityInformation } from "../hooks";
import { useProfile } from "../../../../components/organisms/sidebar/profile/hooks";

const AiIdentityScoring: FC = (): ReactElement => {
  const MAX_FILE_SIZE = 30000000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
  const dataValidationSchema = z.object({
    image_ktp: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),

    image_selfie: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),

    image_surat_nomor_induk_berusaha: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),

    image_surat_izin_usaha_perdagangan: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_nomor_akta_notaris: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_keterangan_domisili_usaha: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_nomor_pokok_wajib_pajak: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_surat_tanda_daftar_perusahaan: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
  });

  const { mutate } = useIdentityInformation();
  type DataValidationSchema = z.infer<typeof dataValidationSchema>;

  const { setDataCategory } = useCategoryStatus();
  const { setDataIdentity, getDataIdentity } = useIdentityStatus();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<DataValidationSchema>({
    resolver: zodResolver(dataValidationSchema),
    mode: "all",
    defaultValues: {
      image_ktp: undefined,
      image_selfie: undefined,
      image_surat_izin_usaha_perdagangan: undefined,
      image_surat_keterangan_domisili_usaha: undefined,
      image_surat_nomor_akta_notaris: undefined,
      image_surat_nomor_induk_berusaha: undefined,
      image_surat_nomor_pokok_wajib_pajak: undefined,
      image_surat_tanda_daftar_perusahaan: undefined,
    },
  });

  const { data: profile } = useProfile();

  const onSubmit = handleSubmit((data) => {
    try {
      mutate(
        {
          ...data,
          user_id: profile?.data?._id,
          ktp: data.image_ktp[0] as File,
          selfie: data.image_selfie[0] as File,
          surat_nomor_induk_berusaha: data.image_surat_nomor_induk_berusaha[0] as File,
          surat_izin_usaha_perdagangan: data.image_surat_izin_usaha_perdagangan[0] as File,
          surat_nomor_akta_notaris: data.image_surat_nomor_akta_notaris[0] as File,
          surat_keterangan_domisili_usaha: data.image_surat_keterangan_domisili_usaha[0] as File,
          surat_tanda_daftar_perusahaan: data.image_surat_tanda_daftar_perusahaan[0] as File,
          npwp: data.image_surat_nomor_pokok_wajib_pajak[0] as File,
        },
        {
          onSuccess: () => {
            setDataIdentity(true);
            setDataCategory("onProgress");
          },
        },
      );
    } catch (err) {
      setDataIdentity(false);
      throw err;
    }
  });

  const upload: Array<{
    name: string;
    control: Control;
    required: boolean;
    accepted: string;
    label: string;
    notif: string;
    message?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
    status: "error" | "none" | "success" | "warning" | undefined;
  }> = [
    {
      name: "image_ktp",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Kartu Tanda Penduduk (KTP)",
      message: errors.image_ktp?.message,
      status: errors.image_ktp ? "error" : "none",
      notif: "*Pastikan foto KTP dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_selfie",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Foto Selfi Diri",
      message: errors.image_selfie?.message,
      status: errors.image_selfie ? "error" : "none",
      notif: "*Pastikan wajah Anda dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_nomor_induk_berusaha",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Nomor Induk Berusaha",
      message: errors.image_surat_nomor_induk_berusaha?.message,
      status: errors.image_surat_nomor_induk_berusaha ? "error" : "none",
      notif:
        "*Pastikan foto Surat Nomor Induk Berusha dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_izin_usaha_perdagangan",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Izin Usaha Perdagangan",
      message: errors.image_surat_izin_usaha_perdagangan?.message,
      status: errors.image_surat_izin_usaha_perdagangan ? "error" : "none",
      notif:
        "*Pastikan foto Surat Izin Usaha Perdagangan dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_nomor_akta_notaris",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Nomor Akta Notaris",
      message: errors.image_surat_nomor_akta_notaris?.message,
      status: errors.image_surat_nomor_akta_notaris ? "error" : "none",
      notif:
        "*Pastikan foto Surat Nomor Akta Notaris dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_keterangan_domisili_usaha",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Keterangan Domisili Usaha",
      message: errors.image_surat_keterangan_domisili_usaha?.message,
      status: errors.image_surat_keterangan_domisili_usaha ? "error" : "none",
      notif:
        "*Pastikan foto Surat Keterangan Domisili Usaha dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_nomor_pokok_wajib_pajak",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Nomor Pokok Wajib Pajak",
      message: errors.image_surat_nomor_pokok_wajib_pajak?.message,
      status: errors.image_surat_nomor_pokok_wajib_pajak ? "error" : "none",
      notif:
        "*Pastikan foto Surat Nomor Pokok Wajib Pajak dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_surat_tanda_daftar_perusahaan",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Surat Tanda Daftar Perusahaan ",
      message: errors.image_surat_tanda_daftar_perusahaan?.message,
      status: errors.image_surat_tanda_daftar_perusahaan ? "error" : "none",
      notif:
        "*Pastikan foto Surat Tanda Daftar Perusahaan dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
  ];

  return (
    <div>
      <Accordion
        title="Ai Identity Scoring"
        idAccordion={getDataIdentity ? "" : "identity-status-state"}
        disabled={getDataIdentity ? true : false}
      >
        <form onSubmit={onSubmit}>
          {upload.map((x, i) => (
            <div className="py-2" key={i}>
              <div className="flex gap-4">
                <div className="w-[95%] ">
                  <UploadField {...x} message={x.message as string} variant={"md"} />
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
              type={"submit"}
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
