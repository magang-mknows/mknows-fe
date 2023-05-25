import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { DocProcessBreadCumbs } from "./const";
import DocumentProcessHeader from "./header/header";
import { DocumentProcessForm } from "./form";
import { ContentFooter } from "../common/footer/footer-content";

export const DocumentProcessModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={DocProcessBreadCumbs} textColor="text-version2-400" />
      <DocumentProcessHeader />
      <DocumentProcessForm />
      <ContentFooter />
    </ClientProvider>
  );
};
