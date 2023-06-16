import { FC, ReactElement } from "react";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { AnalyticBreadcumbs } from "./const";
import { SidebarSection } from "./sidebar";
import { MainSection } from "./main";

export const AnalyticModule: FC = (): ReactElement => {
  return (
    <section className="min-h-[140vh]">
      <BreadCrumb items={AnalyticBreadcumbs} bgColor="bg-grey-100" />
      <section className="grid grid-cols-3 gap-6 px-8 md:px-14 lg:px-16">
        <SidebarSection />
        <MainSection />
      </section>
    </section>
  );
};
