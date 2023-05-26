import { FC, ReactElement } from "react";
import Image from "next/image";
import { CardDiscussion as CardAuthor } from "../../components/card/discussion";
import { CardComment } from "../../components/card/comment";

import profileDummy from "../../assets/profile-dummy.svg";
import down from "../../assets/down.svg";
import redo from "../../assets/redo.svg";
import { useGetAllDiscuss, useGetAllDiscussion } from "./hooks";
import { useRouter } from "next/router";

export const ContentSection: FC = (): ReactElement => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useGetAllDiscussion(id as string);
  // const { data } = useGetAllDiscussion("6bc3b730-8c7d-41f0-a1dc-03bac621a824");
  const listDiscussionData = data?.data;
  console.log(listDiscussionData);

  return (
    <>
      {listDiscussionData?.map((discussion, index) => {
        const tanggalDibuat = new Date(discussion.created_at);
        console.log(tanggalDibuat);

        return (
          <CardAuthor
            key={index}
            title={discussion.title}
            author={discussion.author.full_name}
            avatar={profileDummy}
            time={discussion.created_at}
            content={discussion.title}
            role={discussion.author.role}
          />
        );
      })}
      {/* reply */}
      <div className="flex flex-row gap-4">
        <p className="text-[#106FA4] font-[600] text-[16px]">3 Balasan</p>
        <Image src={down} alt={"down"} />
      </div>

      <CardComment
        styleCard="md:ml-14 ml-9 bg-[#F5F5F5]"
        title={"Manajemen Keuangan"}
        author={"Bakti Husada"}
        avatar={profileDummy}
        time={"20 menit"}
        content={
          "Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas"
        }
        role={"mahasiswa"}
      />
      {/* reply */}
      <div className="flex flex-row gap-4 ml-14">
        <p className="text-[#106FA4] font-[600] text-[16px]">3 Balasan</p>
        <Image src={down} alt={"down"} />
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

      {/* redo*/}
      <div className="flex flex-row gap-4 ml-28">
        <Image src={redo} alt={"redo"} />
        <p className="text-[#106FA4] font-[600] text-[16px]">Lihat 8 komentar lain</p>
      </div>
    </>
  );
};
