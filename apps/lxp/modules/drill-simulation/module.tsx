import { FC, ReactElement } from "react";
import { DrillSimulationHeader } from "./header";
import { DrillSimulationMain } from "./main";
import { ClientProvider } from "../common/provider";
import { ContentFooter } from "../common/footer/footer-content";

export const DrillSimulationModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <section className="bg-neutral-50/60">
        <DrillSimulationHeader />
        <DrillSimulationMain />
      </section>
      <ContentFooter />
    </ClientProvider>
  );
};
