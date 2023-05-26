import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { RequestSimulationBreadCumbs } from "./const";
import { RequestSceduleMain } from "./main";

export const RequestScheduleModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <section className="bg-neutral-50/60 min-h-[100vh] pb-20 ">
        <BreadCrumb items={RequestSimulationBreadCumbs} textColor="text-version2-400" />
        <section className="px-8 md:px-14 lg:px-16 py-0 md:py-2 lg:py-4 ">
          <header className="w-full font-bold text-xl md:text-2xl lg:text-3xl mb-6 text-neutral-900">
            Drill, Simulasi & Assessmen
          </header>
          <RequestSceduleMain />
        </section>
      </section>
    </ClientProvider>
  );
};
