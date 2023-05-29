import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { AnalyticBreadcumbs } from "./const";
import { SidebarSection } from "./sidebar";
import { MainSection } from "./main";
import { ContentFooter } from "../common/footer/footer-content";

export const AnalyticModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <section className="min-h-[140vh]">
        <BreadCrumb items={AnalyticBreadcumbs} textColor="text-version2-400" />
        <section className="grid grid-cols-3 gap-6 px-8 md:px-14 lg:px-16">
          <SidebarSection />
          <MainSection />
        </section>
      </section>
      <ContentFooter />
    </ClientProvider>
  );
};
