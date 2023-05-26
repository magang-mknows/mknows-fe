import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, TextField, UploadField } from "@mknows-frontend-services/components/atoms";

export const DocumentProcessForm: FC = (): ReactElement => {
  const MAX_FILE_SIZE = 3000000;
  const ACCEPTED_PDF_TYPES = ["application/pdf"];

  const validationSchema = z.object({
    name: z.string().min(1, { message: "Masukan Nama Anda" }),
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    nip: z.string().min(1, { message: "Masukan NIP Anda" }),
    message: z.string().min(1, { message: "Masukan pesan Anda" }),
    upload_doc: z
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

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      nip: "",
      message: "",
      upload_doc: undefined,
    },
  });

  return (
    <div className="mx-8 md:mx-16 lg:mx-40 my-10 bg-neutral-50 rounded-md shadow-sm min-h-[80vh]">
      <form className="px-8 md:px-14 lg:px-16 py-8 md:py-14 lg:py-16 w-full ">
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <label htmlFor="name" className="mb-1 text-neutral-800 font-bold text-base lg:text-lg  ">
            Nama <span className="text-warning-500 px-2">*</span>
          </label>
          <div className="col-span-3 ">
            <TextField
              type="text"
              variant="sm"
              control={control}
              name={"name"}
              className="!border-[0.5px] -mt-2 !border-neutral-500 !rounded-md px-3 py-2.5 text-sm !ring-0 "
            />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <label htmlFor="nip" className=" mb-1 text-neutral-800 font-bold text-base lg:text-lg ">
            NIP <span className="text-warning-500 px-2">*</span>
          </label>
          <div className=" col-span-3">
            <TextField
              type="text"
              variant="sm"
              control={control}
              name={"nip"}
              className="!border-[0.5px] -mt-3  !border-neutral-500 !rounded-md px-3 py-2.5 text-sm !ring-0 "
            />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <label htmlFor="email" className=" mb-1 text-neutral-800 font-bold text-base lg:text-lg ">
            Email <span className="text-warning-500 px-2">*</span>
          </label>
          <div className=" col-span-3">
            <TextField
              type="email"
              variant="sm"
              control={control}
              name={"email"}
              className="!border-[0.5px] -mt-3  !border-neutral-500 !rounded-md px-3 py-2.5 text-sm !ring-0 "
            />
          </div>
        </section>
        <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <label htmlFor="message" className=" mb-1 text-neutral-800 font-bold text-lg">
            Pesan <span className="text-warning-500 px-2">*</span>
          </label>
          <div className=" col-span-3">
            <TextField
              textAreaRow={8}
              isTextArea
              variant="sm"
              control={control}
              name={"message"}
              className="!border-[0.5px] text-sm -mt-3  !border-neutral-500 !rounded-md px-3 py-3  !ring-0 "
            />
          </div>
        </section>
        {/* <section className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-20  mb-4 lg:mb-6">
          <label
            htmlFor="upload_doc"
            className=" mb-1 text-neutral-800 font-bold text-lg"
          >
            Ugggah Dokumen <span className="text-warning-500 px-2">*</span>
          </label>
          <div className=" col-span-3">
           
          </div>
        </section> */}
        <section className="w-full flex justify-start md:justify-end">
          {/* <Button
            size="large"
            type="primary"
            text="Ajukan Dokumen"
            disabled={!isValid}
          /> */}
          <Button
            type="submit"
            className=" disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 w-full text-sm py-3 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
          >
            <h1>Ajukan Dokumen</h1>
          </Button>
        </section>
      </form>
    </div>
  );
};
