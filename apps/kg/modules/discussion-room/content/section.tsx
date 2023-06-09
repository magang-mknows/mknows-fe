import { FC, ReactElement, useState } from "react";
import { useRecoilState } from "recoil";
import { Modal } from "@mknows-frontend-services/components/molecules";
import { Button } from "@mknows-frontend-services/components/atoms";

import { useGetAllDiscussion } from "./hooks";
import { isModalOpen, selectedOption } from "./store";
import { DiscussionPostOption } from "./post/option";
import { DeleteConfirmModal, PostReportModal, PostSpamModal } from "./post/modal";
import ReportSuccessModal from "./post/modal/post-report-success/section";

import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineSearch } from "react-icons/ai";
import DiscussionCard from "./post/section";
import { FaTelegramPlane } from "react-icons/fa";
import { TiCamera } from "react-icons/ti";
import { CommentSection } from "./CommentSection";
import { PostCreateModal } from "./post/modal/post-create";
import { PostEditModal } from "./post/modal/post-edit";

export const DiscussionContent: FC = (): ReactElement => {
  const [isOptionOpen, setOptionOpen] = useRecoilState(isModalOpen);
  const [getSelectedOption, setSelectedOption] = useRecoilState(selectedOption);

  const { data } = useGetAllDiscussion("100");
  const listDiscussionData = data?.data;

  function daysAgo(days: string) {
    const today = new Date();
    const msInDay = 24 * 60 * 60 * 1000;
    const createdOn = new Date(days);
    createdOn.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return String((+today - +createdOn) / msInDay);
  }

  return (
    // Suspense untuk loading lalu dibungkus ErrorBoundaries, data empty
    <section className="px-8 py-8 mx-8 my-8 bg-white rounded-md shadow-sm md:mx-14 lg:mx-16 md:px-14 lg:px-16 ">
      <section className="flex flex-wrap items-center justify-between w-full mb-6 md:flex-nowrap gap-x-2 gap-y-3">
        <label
          htmlFor="searchDiscussion"
          className="flex  px-3 w-full gap-4 items-center rounded-md shadow-sm  bg-neutral-100  text-neutral-500 h-[42px] lg:h-[50px]"
        >
          <AiOutlineSearch className="text-xl md:text-2xl text-neutral-500 " />
          <input
            type="text"
            className="w-full px-2 text-xs outline-none bg-neutral-100 text-neutral-700 md:text-sm"
            id="searchDiscussion"
            placeholder="Cari Topik Diskusi"
          />
        </label>
        <section className="w-full md:w-[200px] gap-10 lg:w-[200px] h-[42px] lg:h-[50px] flex justify-start md:justify-end">
          <Button
            type="button"
            className="relative z-10 flex items-center justify-center w-full gap-2 py-4 text-sm font-bold transition-colors duration-300 ease-in-out border-2 rounded-md border-version2-500 disabled:bg-[#106FA4]-200/70 disabled:border-none bg-[#106FA4] text-neutral-100 hover:opacity-50 hover:border-version2-300"
            onClick={() => {
              setOptionOpen(true);
              setSelectedOption("create");
            }}
          >
            <h1>Buat Diskusi</h1>
            <IoMdAddCircleOutline className="text-xl text-neutral-50" />
          </Button>
        </section>
      </section>
      <section className="relative w-full py-4">
        {listDiscussionData?.map((discussion, index) => {
          return (
            <div key={index}>
              <DiscussionCard
                type="post"
                hasImage={discussion.images[0] ? true : false}
                imgSource={discussion.images[0]}
                countLikes={discussion.likes}
                time={`${daysAgo(discussion.created_at)} Hari yang lalu`}
                userName={discussion.author.full_name}
                title={discussion.title}
                text={discussion.content}
                option={<DiscussionPostOption id={discussion.id as unknown as string} />}
              >
                <section className="w-full gap-5 mb-6 border-2 rounded-md shadow-sm border-neutral-100">
                  <label
                    htmlFor="postComment"
                    className="flex items-center justify-between w-full gap-4 px-3 py-3 rounded-md bg-neutral-100 text-neutral-500 "
                  >
                    <input
                      type="text"
                      className="w-full px-2 text-xs bg-transparent outline-none bg-neutral-100 text-neutral-700 md:text-sm"
                      id="postComment"
                      placeholder="Ketikan Balasan Disini"
                    />
                    <section className="flex items-center gap-2 text-lg lg:text-xl">
                      <TiCamera className="text-neutral-600 " />
                      <FaTelegramPlane className="text-version3-500 text-[#106FA4]" />
                    </section>
                  </label>
                </section>
                <section>
                  <h1 className="mb-6 text-sm font-bold md:mb-8 lg:mb-10 text-[#106FA4]">
                    {discussion?.comments} balasan
                  </h1>
                  <CommentSection id={discussion.id} />
                </section>
              </DiscussionCard>
            </div>
          );
        })}
      </section>
      <Modal
        withClose={false}
        hasImage={false}
        lookup={isOptionOpen}
        onClose={() => setOptionOpen(false)}
      >
        {getSelectedOption === "create" && <PostCreateModal />}
        {getSelectedOption === "edit" && <PostEditModal />}
        {getSelectedOption === "report" && <PostReportModal />}
        {getSelectedOption === "reportDetail" && <PostSpamModal />}
        {getSelectedOption === "reportSuccess" && <ReportSuccessModal />}
        {getSelectedOption === "delete" && <DeleteConfirmModal />}
      </Modal>
    </section>
  );
};
