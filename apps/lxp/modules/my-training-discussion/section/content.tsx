import { FC, ReactElement } from "react";
import Image from "next/image";
import { CardAuthor } from "../common";
import profileDummy from "../assets/profile-dummy.svg";
import Down from "../assets/down.svg";
import Redo from "../assets/redo.svg";
import { useGetAllDiscussion } from "./hooks";
import { CommentSection } from "./CommentSection";
import DiscussionCard from "../../discussion-room/content/post/section";
import { DiscussionPostOption } from "../../discussion-room/content/post/option";
import { TiCamera } from "react-icons/ti";
import { FaTelegramPlane } from "react-icons/fa";

const Content: FC = (): ReactElement => {
  const { data: getAllDiscusiion } = useGetAllDiscussion();
  const listDiscussionData = getAllDiscusiion?.data;

  return (
    <>
      <DiscussionCard
        type="post"
        hasImage={false}
        countLikes={3}
        time="100 hari"
        userName="Bandi Sukanto"
        text="Diskusikan tentang manajemen keuangan menurut pemahaman anda? Apakah fungsi dan tujuan dari manajemen keuangan. Apa modul yang telah kalian pelajari sudah jelas?"
        title="Diskusi Manajemen Keuangan"
        option={<DiscussionPostOption id={`test id ${+1 as unknown as string}`} />}
      >
        <section className="w-full border-2 rounded-md border-neutral-100  shadow-sm gap-5 mb-6">
          <label
            htmlFor="postComment"
            className="flex justify-between py-3 px-3 w-full gap-4 items-center rounded-md   bg-neutral-100 text-neutral-500 "
          >
            <input
              type="text"
              className="  bg-neutral-100 w-full outline-none text-neutral-700 bg-transparent md:text-sm text-xs px-2"
              id="postComment"
              placeholder="Ketikan Balasan Disini"
            />
            <section className="flex gap-2 items-center text-lg lg:text-xl">
              <TiCamera className="text-neutral-600 " />
              <FaTelegramPlane className="text-version3-500  " />
            </section>
          </label>
        </section>
        <section>
          <h1 className="mb-6 md:mb-8 lg:mb-10 text-version2-400  font-bold text-sm">
            {listDiscussionData?.length} balasan
          </h1>
          <section>
            {listDiscussionData?.map((comment, index) => {
              return (
                <section key={index} className="mb-10 pl-6 md:pl-8 lg:pl-14">
                  <DiscussionCard
                    hasImage={true}
                    countLikes={0}
                    time={""}
                    type="comment"
                    userName={""}
                    text={""}
                    imgSource={""}
                    title={""}
                    option={
                      <DiscussionPostOption id={`test id ${(index + 1) as unknown as string}`} />
                    }
                  ></DiscussionCard>
                </section>
              );
            })}
          </section>
        </section>
      </DiscussionCard>

      {/* redo*/}
      {/* <div className="flex flex-row gap-4 ml-28">
        <Image src={Redo} className="w-auto" width={100} height={100} alt={"redo"} />
        <p className="text-[#106FA4] font-[600] text-[16px]">Lihat 8 komentar lain</p>
      </div> */}
    </>
  );
};

export default Content;
