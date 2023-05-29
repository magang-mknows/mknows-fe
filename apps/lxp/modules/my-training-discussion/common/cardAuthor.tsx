import { FC, ReactElement } from "react";
import Image from "next/image";
import { BsSendFill } from "react-icons/bs";
import { MdOutlineAttachFile } from "react-icons/md";
import { cardAuthor } from "../type";
import { LikeComment } from "./likeComment";
import Circle from "../assets/circle.svg";

import { useCreateCommentById } from "../section/hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TDiscussionPayload } from "../section/types";
import { Button, TextField } from "@mknows-frontend-services/components/atoms";

export const CardAuthor: FC<cardAuthor> = ({
  title,
  avatar,
  time,
  content,
  author,
  role,
  styleCard,
  id,
}): ReactElement => {
  const { mutate, isLoading } = useCreateCommentById(id as string);
  type ValidationSchema = z.infer<typeof validationSchema>;
  const validationSchema = z.object({
    content: z.string().min(1, { message: "Komen tidak boleh kosong" }),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      content: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      mutate(data as TDiscussionPayload);
      reset(data);
    } catch (err) {
      console.log("Gagal Mengunggah");
    }
  });

  return (
    <>
      <div className={`card px-10 py-8 bg-[#FFFF]  rounded-[8px] mb-4  ${styleCard}`}>
        <div className="flex flex-row items-center gap-5 profile">
          <Image src={avatar} alt={"img-profile"} />
          <div className="">
            <h1 className="text-[##171717] font-[600] text-[14px]">{title}</h1>
            <p className="font-[400] text-[12px] text-[#171717] flex flex-row gap-1">
              oleh{" "}
              <span className="text-[#2D9A41] ">
                {author} <span>({role})</span>
              </span>
              <Image src={Circle} className="w-auto" width={100} height={100} alt={"circle"} />
              <span className="text-[#737373]">{time}</span>
            </p>
          </div>
        </div>

        <p className="desc mt-8 text-[#171717] text-[14px] font-[400] ">{content}</p>
        <LikeComment />
        <form onSubmit={onSubmit}>
          <div className="comment border rounded-[8px] mt-4 px-3 flex justify-end h-[44px] ">
            {/* <input
            type="text"
            className="w-full px-3 outline-none text-[14px] font-[400]"
            placeholder="Ketikan Balasan disini"
          /> */}
            <TextField
              placeholder="Ketikan Balasan disini"
              name={"content"}
              variant={"lg"}
              control={control}
              className="w-full px-3 outline-none text-[14px] font-[400]"
            />

            <div className="flex flex-row items-center gap-4">
              <MdOutlineAttachFile className="w-[30px] h-[30px]" />
              <Button type={"submit"} disabled={!isValid}>
                <BsSendFill className="w-[20px] h-[20px]" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
