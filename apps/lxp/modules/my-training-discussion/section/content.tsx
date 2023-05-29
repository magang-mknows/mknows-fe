import { FC, ReactElement } from "react";
import Image from "next/image";
import profileDummy from "../assets/profile-dummy.svg";
import { CardAuthor, CardComment } from "../common";
import Down from "../assets/down.svg";
import Redo from "../assets/redo.svg";
import { useGetAllDiscussion } from "./hooks";

const Content: FC = (): ReactElement => {
  const { data } = useGetAllDiscussion();
  const listDiscussionData = data?.data;
  console.log(listDiscussionData);

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
            />
            {/* reply */}
            <div className="flex flex-row gap-4">
              <p className="text-[#106FA4] font-[600] text-[16px]">3 Balasan</p>
              <Image src={Down} className="w-auto" width={100} height={100} alt={"down"} />
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
