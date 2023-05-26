import React, { ReactElement } from "react";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import ContentSection from "./section/ContentSection";
import { ClientProvider } from "../common/provider";
import { guideVideoBreadCumbs } from "./const";
import { LayoutFooter } from "../common/footer/footer-layout";

export const RegistrationVideoModule = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={guideVideoBreadCumbs} />
      <ContentSection />
      <LayoutFooter />
    </ClientProvider>
  );
};
