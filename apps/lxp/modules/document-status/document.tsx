import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { DocStatusBreadCumbs } from "./const";
import { DocumentStatusHeader } from "./header";
import { DocumentStatusMain } from "./main";
import { ContentFooter } from "../common/footer/footer-content";

export const DocumentStatusModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={DocStatusBreadCumbs} textColor="text-version2-400" />
      <DocumentStatusHeader />
      <DocumentStatusMain />
      <ContentFooter />
    </ClientProvider>
  );
};
