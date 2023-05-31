import { FC, ReactElement } from "react";
import Image from "next/image";
import { CardAuthor } from "../common";
import profileDummy from "../assets/profile-dummy.svg";
import Down from "../assets/down.svg";
import Redo from "../assets/redo.svg";
import { useGetAllDiscussion } from "./hooks";
import { CommentSection } from "./CommentSection";

const Content: FC = (): ReactElement => {
  const { data: getAllDiscusiion } = useGetAllDiscussion();
  const listDiscussionData = getAllDiscusiion?.data;

  return (
    <>
      {listDiscussionData?.map((discussion, index) => {
        return (
          <section key={index}>
            <CardAuthor
              title={discussion.title}
              author={"Bakti Husada"}
              avatar={profileDummy}
              time={"20 menit"}
              content={discussion.content}
              role={"mahasiswa"}
              id={discussion.id}
            />
            {/* reply */}
            <div className="flex flex-row gap-4">
              <p className="text-[#106FA4] font-[600] text-[16px]">3 Balasan</p>
              <Image src={Down} className="w-auto" width={100} height={100} alt={"down"} />
            </div>
            <CommentSection id={discussion.id} />
          </section>
        );
      })}

      {/* redo*/}
      <div className="flex flex-row gap-4 ml-28">
        <Image src={Redo} className="w-auto" width={100} height={100} alt={"redo"} />
        <p className="text-[#106FA4] font-[600] text-[16px]">Lihat 8 komentar lain</p>
      </div>
    </>
  );
};

export default Content;
