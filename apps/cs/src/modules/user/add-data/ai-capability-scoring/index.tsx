import { FC, ReactElement, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldError, FieldErrorsImpl, Merge, useForm } from "react-hook-form";
import {
  UploadField,
  Button,
  UploadDragbleField,
} from "@mknows-frontend-services/components/atoms";
import { Accordion, CardCS } from "@mknows-frontend-services/components/molecules";
import { IconDownload, IconNotif } from "@mknows-frontend-services/components/atoms";
import {
  useCategoryStatus,
  useCapabilityStatus,
  useCharacterStatus,
  useIdentityStatus,
} from "../../hooks";
import { useProfile } from "../../../common/hooks";
import { useCapabilityInformation } from "../hooks";
import { Dialog } from "@headlessui/react";

const AiCapabilityScoring: FC = (): ReactElement => {
  const [isOpen, setisOpen] = useState(false);
  const MAX_FILE_SIZE = 300000;
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];
  const dataValidationSchema = z.object({
    all_files_capability: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
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
    image_credit_applicant: z
      .any()
      .refine(
        (files: File[]) => files !== undefined && files?.[0]?.size <= MAX_FILE_SIZE,
        "Ukuran maksimun adalah 3mb.",
      )
      .refine(
        (files: File[]) => files !== undefined && ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, and .png formats are supported",
      ),
    image_laporan_keuangan: z
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

  const { mutate } = useCapabilityInformation();
  type DataValidationSchema = z.infer<typeof dataValidationSchema>;

  const { setDataCapability, getDataCapability } = useCapabilityStatus();
  const { setDataCategory } = useCategoryStatus();

  const { getDataCharacter } = useCharacterStatus();
  const { getDataIdentity } = useIdentityStatus();

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<DataValidationSchema>({
    resolver: zodResolver(dataValidationSchema),
    mode: "all",
    defaultValues: {
      all_files_capability: undefined,
      image_credit_applicant: undefined,
      image_ktp: undefined,
      image_laporan_keuangan: undefined,
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
          surat_nomor_induk_berusaha: data.image_surat_nomor_induk_berusaha[0] as File,
          surat_izin_usaha_perdagangan: data.image_surat_izin_usaha_perdagangan[0] as File,
          surat_nomor_akta_notaris: data.image_surat_nomor_akta_notaris[0] as File,
          surat_keterangan_domisili_usaha: data.image_surat_keterangan_domisili_usaha[0] as File,
          surat_tanda_daftar_perusahaan: data.image_surat_tanda_daftar_perusahaan[0] as File,
          npwp: data.image_surat_nomor_pokok_wajib_pajak[0] as File,
          form_credit_applicant: data.image_credit_applicant[0] as File,
          surat_laporan_keuangan: data.image_laporan_keuangan[0] as File,
        },
        {
          onSuccess: () => {
            setDataCategory("finished");
            setDataCapability(true);
          },
        },
      );
    } catch (err) {
      setDataCapability(false);
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
      label: "Surat Tanda Daftar Perusahaan",
      message: errors.image_surat_tanda_daftar_perusahaan?.message,
      status: errors.image_surat_tanda_daftar_perusahaan ? "error" : "none",
      notif:
        "*Pastikan foto Surat Tanda Daftar Perusahaan dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_credit_applicant",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Form Credit Applicant",
      message: errors.image_credit_applicant?.message,
      status: errors.image_credit_applicant ? "error" : "none",
      notif:
        "*Pastikan Form Credit Applicant dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
    {
      name: "image_laporanKeuangan",
      control,
      required: true,
      accepted: ".jpg, .jpeg, .png",
      label: "Laporan Keuangan",
      message: errors.image_laporan_keuangan?.message,
      status: errors.image_laporan_keuangan ? "error" : "none",
      notif: "*Pastikan Laporan Keuangan dapat terlihat dengan jelas dan pencahayaan yang baik",
    },
  ];
  return (
    <section>
      <Dialog
        open={isOpen}
        onClose={() => setisOpen(false)}
        className="absolute  top-[30%] left-[30%]"
      >
        <Dialog.Panel>
          <CardCS className="hover:cursor-pointer w-full  h-fit shadow-2xl py-4 px-6">
            <div className="w-full flex flex-col gap gap-y-2">
              <button onClick={() => setisOpen(false)} className="flex w-full justify-end">
                X
              </button>
              <div className="flex">
                <div className="w-[60%]">
                  <h1 className="font-bold">Tata Cara Mengambil Foto</h1>
                  <p>1. Pastikan Foto Pas di Layar</p>
                  <p>2. Pastikan Foto yang diambil jelas dan tidak terlihat buram</p>
                  <p>3. Pastikan teks terbaca</p>
                </div>
                <div>
                  <img src="/exampe.png" alt="sample" />
                </div>
              </div>
            </div>
          </CardCS>
        </Dialog.Panel>
      </Dialog>

      <Accordion
        title="Ai Capability Scoring"
        idAccordion={getDataCapability ? "" : "data-capability"}
        disabled={
          getDataIdentity ? (getDataCharacter ? (getDataCapability ? true : false) : true) : true
        }
      >
        <UploadDragbleField
          variant="md"
          label="Thumbnail"
          control={control}
          name="all_files_capability"
          status="error"
          message="tidak bisa upload file"
        />
        <div className="flex justify-between gap-2 py-2 pb-10">
          <div className="flex cursor-pointer">
            <IconDownload />
            <p className="text-[#3D628D] font-bold cursor-auto">Unduh templete dokumen</p>
          </div>
          <div>
            <p className="text-xs py-2 text-gray-500">XLS, XLSX(MAXIMUM SIZE:50 MB)</p>
          </div>
        </div>
        <form onSubmit={onSubmit}>
          {upload.map((x, i) => (
            <div className="py-2" key={i}>
              <div className="flex gap-4">
                <div className="w-[95%] ">
                  <UploadField {...x} message={x.message as string} variant={"md"} />
                </div>
                <div onClick={() => setisOpen(true)} className="flex group flex-col gap-2">
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

          <Button
            disabled={!isValid}
            className="my-4 w-[200px] rounded-[8px] disabled:bg-gray-300 disabled:text-gray-100 bg-primary-300 text-white font-bold p-3 text-1xl"
            type={"submit"}
          >
            Simpan
          </Button>
        </form>
      </Accordion>
    </section>
  );
};

export default AiCapabilityScoring;
