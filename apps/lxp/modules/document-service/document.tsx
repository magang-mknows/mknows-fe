import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { DocServiceBreadCumbs } from "./const";
import { DocumentServiceList } from "./document-list";
import { ContentFooter } from "../common/footer/footer-content";

export const DocumentServiceModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={DocServiceBreadCumbs} textColor="text-version2-400" />
      <section className="px-8 pt-10 md:px-14 lg:px-16 mb-10 md:mb-11">
        <h1 className="text-2xl font-bold text-center mb-1 text-neutral-900">Pilih Dokumen</h1>
        <p className="text-sm text-neutral-800 text-center">
          Pilihlah dokumen yang ingin Anda unduh
        </p>
      </section>
      <DocumentServiceList />
      <ContentFooter />
    </ClientProvider>
  );
};
