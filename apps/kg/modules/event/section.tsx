import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { FC, ReactElement } from "react";
import { acaraKampusBreadCumbs } from "../administration/constant";
import { BaseLayout } from "../common";
import { EventList } from "./event-list";

export const EventModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={acaraKampusBreadCumbs} />
      <div className="w-full px-6 md:px-8 lg:px-10">
        <EventList />
      </div>
    </BaseLayout>
  );
};
