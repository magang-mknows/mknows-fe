import React, { FC } from "react";
import { CardComment } from "../common";
import profileDummy from "../assets/profile-dummy.svg";
import { useGetDetailDiscussionById } from "./hooks";
import { ReplySection } from "./ReplySection";

type TCommentSection = {
  id: string;
};

export const CommentSection: FC<TCommentSection> = ({ id }) => {
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
            <ReplySection data={discussion.comment_replies} id={discussion.id} />
          </div>
        );
      })}
    </>
  );
};
