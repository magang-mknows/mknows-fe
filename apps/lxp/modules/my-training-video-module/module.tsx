import React, { Fragment, ReactElement } from "react";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import ContentSection from "./section/ContentSection";
import { myTrainingModuleBreadCumbs } from "../mytraining-module/const";
import { ClientProvider } from "../common/provider";

export const MyTrainingVideoModule = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={myTrainingModuleBreadCumbs} />
      <ContentSection />
    </ClientProvider>
  );
};
