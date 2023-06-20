import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import Sidebar from "./section/sidebar";
import Content from "./section/content";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { myTrainingDiscussionBreadCumbs } from "./constant";

export const MyTrainingDiscussionModule: FC = (): ReactElement => {
  return (
    <ClientProvider className="!bg-light">
      <BreadCrumb items={myTrainingDiscussionBreadCumbs} textColor="text-version2-400" />
      <div className="w-full flex md:flex-row flex-col gap-10 px-6 md:px-8 lg:px-10 py-5 ">
        <div className="md:basis-3/12 ">
          <Sidebar />
        </div>
        <div>
          <Content />
        </div>
      </div>
    </ClientProvider>
  );
};
