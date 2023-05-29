import React, { FC } from "react";
import { CardComment } from "../common";
import Image from "next/image";
import profileDummy from "../assets/profile-dummy.svg";
import Down from "../assets/down.svg";
import { useCreateReplyById, useGetDetailDiscussionById } from "./hooks";
import { Button, TextField } from "@mknows-frontend-services/components/atoms";
import { MdOutlineAttachFile } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { TDiscussionPayload } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type TCommentReply = {
  id: string;
};

export const CommentReply: FC<TCommentReply> = ({ id }) => {
  const { data: getDiscussionById } = useGetDetailDiscussionById(id);
  const listCommentData = getDiscussionById?.data;
  console.log(listCommentData);

  const { mutate, isLoading } = useCreateReplyById(id as string);
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
      {listCommentData?.discussion_comments?.map((discussion, index) => {
        return (
          <div key={index}>
            <CardComment
              styleCard="md:ml-14 ml-9 bg-[#F5F5F5]"
              title={"Manajemen Keuangan"}
              author={"Bakti Husada"}
              avatar={profileDummy}
              time={"20 menit"}
              content={discussion.content}
              role={"mahasiswa"}
            />
            <form onSubmit={onSubmit}>
              <div className="comment border rounded-[8px] mt-4 px-3 flex justify-end h-[44px] ">
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
            {/* reply */}
            <div className="flex flex-row gap-4 ml-14">
              <p className="text-[#106FA4] font-[600] text-[16px]">3 Balasan</p>
              <Image src={Down} className="w-auto" width={100} height={100} alt={"down"} />
            </div>

            <CardComment
              styleCard="md:ml-28 ml-23 bg-[#F5F5F5]"
              title={"Manajemen Keuangan"}
              author={"Bakti Husada"}
              avatar={profileDummy}
              time={"20 menit"}
              content={
                "Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas"
              }
              role={"mahasiswa"}
            />
          </div>
        );
      })}
    </>
  );
};
