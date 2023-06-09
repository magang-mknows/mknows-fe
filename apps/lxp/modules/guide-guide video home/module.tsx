import { FC, ReactElement } from "react";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { guideBreadCumbs } from "./const";
import { ClientProvider } from "../common/provider";
import { ContentSection, HeroSection } from "./section";
import { LayoutFooter } from "../common/footer/footer-layout";

export const GuideVideoHomeModule: FC = (): ReactElement => {
  return (
    <ClientProvider sectionClassName="!bg-white">
      <BreadCrumb
        items={guideBreadCumbs}
        textColor="text-version2-400 bg-white"
        bgColor="!bg-white"
      />
      <HeroSection />
      <ContentSection />
      <LayoutFooter />
    </ClientProvider>
  );
};
