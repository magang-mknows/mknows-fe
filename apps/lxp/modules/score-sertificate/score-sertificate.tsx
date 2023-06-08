import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { ScoreSertificateBreadCumbs } from "./const";
import { ScoreSertificateMain } from "./main";
import { ContentFooter } from "../common/footer/footer-content";

export const ScoreSertificateModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={ScoreSertificateBreadCumbs} textColor="text-version2-400" />
      <ScoreSertificateMain />
      <ContentFooter />
    </ClientProvider>
  );
};
