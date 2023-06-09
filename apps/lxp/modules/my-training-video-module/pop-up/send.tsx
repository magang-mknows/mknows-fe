import { FC } from "react";
import { usePopupConfirmModul, useSubmitModuleResumeById } from "./hooks";
import { PopupModal } from "@mknows-frontend-services/components/molecules";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { paramsPostModule } from "./types";
import { TextField } from "@mknows-frontend-services/components/atoms";

export const ModulePopup: FC = (ReactElement) => {
  const { setPopupStatus, getPopupStatus } = usePopupConfirmModul();
  const validationSchema = z.object({
    module_answer: z.string().min(1, { message: "Jawaban Harus Diisi" }),
  });
  const { query } = useRouter();
  const params: paramsPostModule = {
    moduleID: query.moduleID as string,
    batchID: query.videoID as string,
  };
  type ValidationSchema = z.infer<typeof validationSchema>;
  const { mutate } = useSubmitModuleResumeById(params);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      module_answer: "",
    },
  });
  const onSubmit = handleSubmit((data) => {
    try {
      mutate(
        {
          ...data,
        },
        {
          onSuccess: () => {
            console.log("sukses");
          },
        },
      );
    } catch (err) {
      console.log("error");
    }
  });

  return (
    <PopupModal
      onClose={() => setPopupStatus(false)}
      lookup={getPopupStatus}
      className="!h-60 !w-[800px]"
    >
      <h1 className="flex p-4 pt-2 rounded-md  bg-version2-500 text-white w-full text-[18px]">
        Apa Pelajaran yang kamu pelajari hari ini?
      </h1>
      <div className="shadow flex justify-start p-2 w-full my-3">
        {/* <input
          className="w-full h-auto lg:p-5 p-2 rounded-md outline-none"
          type="text"
          placeholder="Tulis materi yang kamu dapat disini..."
        /> */}
        <TextField
          variant="md"
          control={control}
          type={"text"}
          name={"module_answer"}
          required={true}
          placeholder="Tulis materi yang kamu dapat disini..."
          className="!w-full !h-auto !lg:p-5 !p-2 !rounded-md !outline-none"
          labelClassName="block  mb-2  text-sm font-medium text-gray-900 "
          status={errors.module_answer ? "error" : "none"}
          message={errors.module_answer?.message}
        />
      </div>
      <p className="text-[#737373] lg:text-[12px] text-sm">
        Materi kamu akan di-review oleh Admin kamu. Pastikan kamu mengisi dengan sesuai!
      </p>
      <div className="p-4 flex w-full justify-end items-end">
        <button
          className=" bg-version2-500 h-[32px] text-white lg:w-[115px] w-full rounded-md"
          onClick={() => {
            setPopupStatus(false);
            // setConfirmModul(true);
            onSubmit();
          }}
        >
          Kirim
        </button>
      </div>
    </PopupModal>
  );
};
