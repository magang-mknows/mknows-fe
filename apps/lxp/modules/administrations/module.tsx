import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { administrationBreadCumbs } from "./constant";
import { ContentAdministration, TitleAdministration } from "./section";
import { ContentFooter } from "../common/footer/footer-content";

export const AdministrationModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={administrationBreadCumbs} textColor="text-version2-400" />
      <div className="bg-white mx-6 md:mx-14 lg:mx-16 rounded-md p-10 mb-14 min-h-[100vh] ">
        <TitleAdministration />
        <ContentAdministration />
      </div>
      <ContentFooter />
    </ClientProvider>
  );
};
