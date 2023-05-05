import React, { FC, lazy, ReactElement } from "react";

import { AiOutlineSearch } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";

import Button from "@/components/Common/Button";
const PopupModalCreateDiscussion = lazy(
  () => import("@/modules/DiscussionRoom/PopupModalCreateDiscussion"),
);

import { usePopupCreateDiscussionStatus } from "@/hooks/Discussion/usePopupCreateDiscussionStatus";
import SuspenseError from "@/modules/Common/SuspenseError";

const Search: FC = (): ReactElement => {
  const { setPopupCreateStatus } = usePopupCreateDiscussionStatus();
  return (
    <section className="flex flex-wrap items-center justify-between w-full mb-6 md:flex-nowrap gap-x-2 gap-y-3">
      <label
        htmlFor="searchDiscussion"
        className="flex  px-3 w-full gap-4 items-center rounded-md shadow-sm  bg-neutral-100 dark:bg-[#222529] dark:border-2 dark:border-neutral-700/80 text-neutral-500 h-[42px] lg:h-[50px]"
      >
        <AiOutlineSearch className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-200" />
        <input
          type="text"
          className="px-2 text-xs bg-transparent outline-none text-neutral-700 dark:text-neutral-100 md:text-sm"
          id="searchDiscussion"
          placeholder="Cari Topik Diskusi"
        />
      </label>
      <section className="w-full md:w-[200px] lg:w-[200px] h-[42px] lg:h-[50px] flex justify-start md:justify-end">
        <Button
          text={"Buat Diskusi"}
          icon={<IoMdAddCircleOutline color="" className="text-lg text-white" />}
          type="button"
          className="flex items-center px-4 lg:px-6 gap-3 bg-primary-500 dark:bg-[#17A2B8] hover:bg-primary-600 dark:hover:bg-[#0f8c9f] text-white text-xs rounded-md shadow-sm transition-colors ease-in-out duration-300"
          onClick={() => setPopupCreateStatus(true)}
        />
      </section>
      <SuspenseError>
        <PopupModalCreateDiscussion />
      </SuspenseError>
    </section>
  );
};

export default Search;
