import { useSetRecoilState } from "recoil";
import { isModalOpen } from "../../../store";
import { RxCross1 } from "react-icons/rx";
import { Button, TextField } from "@mknows-frontend-services/components/atoms";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileIcon } from "./icons";
import { RiSendPlaneFill } from "react-icons/ri";
import { FC } from "react";
import { TEditCreateProps } from "./types";

export const PostCreateEditModal: FC<TEditCreateProps> = ({ type }) => {
  const validationSchema = z.object({
    title: z
      .string()
      .min(5, { message: "Isikan judul diskusi" })
      .max(250, { message: "Judul diskusi melebihi batas" }),
    content: z.optional(z.string().max(1000, { message: "Isi diskusi melebihi batas" })),
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
      title: "",
      content: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    try {
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  });

  const setOptionOpen = useSetRecoilState(isModalOpen);

  return (
    <section className="bg-neutral-50 min-w-[500px]">
      <header className=" flex justify-center border-b-[0.5px] pt-2 pb-4 border-neutral-300  relative">
        <h1 className="font-bold text-lg text-neutral-900">
          {type === "create" ? "Buat Diskusi Baru" : "Edit Diskusi"}
        </h1>
        <RxCross1
          className="text-neutral-400 cursor-pointer text-xl absolute right-0"
          onClick={() => {
            setOptionOpen(false);
          }}
        />
      </header>
      <main className="py-8 px-4">
        <form onSubmit={onSubmit}>
          <TextField
            required
            labelClassName="!text-sm text-left !font-normal"
            type="text"
            variant="md"
            control={control}
            name={"title"}
            placeholder="Ketik judul diskusi kamu"
            label="Judul Diskusi"
            className="!h-[46px] text-sm !rounded-[8px] !border-[1px] !border-[#D4D4D4]"
          />
          <p className="text-xs text-neutral-400 -mt-2 mb-5">Maks. 250 karakter</p>

          <h1 className="text-sm mb-2 text-left">Isi Diskusi</h1>
          <section className="border-[1px] border-[#D4D4D4] rounded-md">
            <TextField
              labelClassName="!text-sm text-left !font-normal"
              type="text"
              variant="md"
              control={control}
              name={"content"}
              placeholder="Mau diskusi apa hari ini?"
              className="h-[46px] !border-[0px] text-sm px-4 py-2"
              isTextArea={true}
            />
            <section className="border-[1px] -mt-2 border-[#D4D4D4] rounded-md flex flex-col justify-center items-center min-h-[220px] m-4 gap-2">
              <FileIcon />
              <label className="flex flex-col items-center">
                <h1 className="text-base text-neutral-800">Tambahkan foto / video</h1>
                <p className="text-xs text-neutral-500">atau seret dan letakkan</p>
              </label>
            </section>
          </section>
          <p className="text-xs text-neutral-400 mt-2 mb-4">Maks. 250 karakter</p>

          <section className="grid place-items-end mt-2">
            <Button
              disabled={!isValid}
              type="submit"
              className="font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 disabled:bg-version2-200/70 disabled:border-version2-200/70 bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 text-sm py-2 w-28"
            >
              {/* place dragable here soon ..... */}
              <RiSendPlaneFill />
              <h1>Kirim </h1>
            </Button>
          </section>
        </form>
      </main>
    </section>
  );
};
