import { FC, ReactElement } from "react";
import { AiFillFlag } from "react-icons/ai";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { reportDetailTitle, reportSuccess, selectedOption, selectedPostId } from "../../../store";
import { Button, TextField } from "@mknows-frontend-services/components/atoms";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const PostSpamModal: FC = (): ReactElement => {
  const getReportDetail = useRecoilValue(reportDetailTitle);
  const setReportSuccess = useSetRecoilState(reportSuccess);
  const setSeletedOption = useSetRecoilState(selectedOption);
  const getSeletedPostId = useRecoilValue(selectedPostId);

  const validationSchema = z.object({
    message: z.string().min(1, { message: "Masukan Detail Laporan anda" }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      message: "",
    },
  });

  return (
    <section className="w-full flex flex-col items-center justify-center gap-4 px-2">
      <div className="h-10 w-10 rounded-full bg-secondary-blue-100 flex items-center justify-center">
        <AiFillFlag className="text-blue-600 text-xl" />
      </div>
      <h1 className="text-base font-bold tracking-wide">
        Ini Adalah {getReportDetail} {getSeletedPostId}
      </h1>
      <form className="w-full flex flex-col  gap-4">
        <TextField
          textAreaRow={6}
          type="text"
          variant="sm"
          control={control}
          name={"message"}
          placeholder="Ceritakan leibh detail disini!"
          isTextArea={true}
          className="border-[2px] px-2 py-1  text-sm block w-full outline-none text-neutral-600 border-neutral-300 rounded-md resize-none"
        />
        <section className="w-full flex justify-end mb-2">
          <Button
            disabled={!isValid}
            type="button"
            className="disabled:bg-version2-200/70 disabled:border-version2-200/70 bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 text-sm py-2 w-28 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
            onClick={() => {
              setSeletedOption("reportSuccess");
              setReportSuccess(true);
            }}
          >
            <h1>Lapor</h1>
          </Button>
        </section>
      </form>
    </section>
  );
};
