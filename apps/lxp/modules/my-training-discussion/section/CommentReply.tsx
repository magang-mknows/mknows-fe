import React, { FC } from "react";
import { CardComment } from "../common";
import Image from "next/image";
import profileDummy from "../assets/profile-dummy.svg";
import Down from "../assets/down.svg";
import { useGetDetailDiscussionById } from "./hooks";

type TCommentReply = {
  id: string;
};

export const CommentReply: FC<TCommentReply> = ({ id }) => {
  const { data: getDiscussionById } = useGetDetailDiscussionById(id);
  const listCommentData = getDiscussionById?.data;
  console.log(listCommentData);

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
