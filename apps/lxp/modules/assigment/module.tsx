import React, { ReactElement } from "react";
import BannerAssigmentSection from "./section/banner/banner";
import AssigmentStatus from "./section/content/content";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { assigmentBreadCumbs } from "./constant";

export const AssigmentModules = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={assigmentBreadCumbs} textColor="text-version2-400" />
      <BannerAssigmentSection />
      <AssigmentStatus />
    </ClientProvider>
  );
};
