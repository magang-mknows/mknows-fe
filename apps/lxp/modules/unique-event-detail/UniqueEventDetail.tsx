import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { UniqueEventBreadCumbs } from "../unique-event/const";
import { EventDetailBanner } from "./event-banner/EventDetailBanner";
import { EventDetailTab } from "./event-tab/EventDetailTab";

export const UniqueEventDetailModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <section className="bg-neutral-50/60 min-h-[100vh]  ">
        <BreadCrumb items={UniqueEventBreadCumbs} textColor="text-version2-400" />
        <section className="px-8 md:px-14 lg:px-16">
          <EventDetailBanner />
          <EventDetailTab />
        </section>
      </section>
    </ClientProvider>
  );
};
