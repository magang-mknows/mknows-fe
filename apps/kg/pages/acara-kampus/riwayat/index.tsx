import { acaraKampusBreadCumbs } from "../../../modules/administration/constant";
import { EventHistory } from "../../../modules/event";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { NextPage } from "next";
import { ReactElement } from "react";
import { BaseLayout } from "../../../modules";

const EventPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={acaraKampusBreadCumbs} />
      <div className="w-full px-10 py-10 lg:px-20 bg-neutral-100">
        <EventHistory />
      </div>
    </BaseLayout>
  );
};

export default EventPage;
