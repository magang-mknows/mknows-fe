import BreadCrumb from "@/components/Assigment/BreadCrumb";
import BaseLayouts from "@/layouts/Base";
import { discussionRoomBreadCumbs } from "@/utilities/constant";
import { FC, ReactElement } from "react";
import Content from "./Content";
import HeroSection from "./HeroSection";

const DiscussionModules: FC = (): ReactElement => {
  return (
    <BaseLayouts className="w-full dark:!bg-[#222529] ">
      <BreadCrumb items={discussionRoomBreadCumbs} />
      <div className="bg-neutral-100  dark:bg-[#222529] w-full min-h-screen px-6 md:px-8 lg:px-10 mb-20 py-10 lg:py-0">
        <HeroSection />
        <Content />
      </div>
    </BaseLayouts>
  );
};

export default DiscussionModules;
