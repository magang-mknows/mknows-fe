import type { NextPage } from "next";
import { ReactElement } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BaseLayout } from "../../../modules/common/layout/base/section";
import { EventDetail } from "../../../modules/event/event-detail";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { acaraKampusBreadCumbs } from "../../../modules/administration/constant";

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happen</>}>
      <BaseLayout>
        <BreadCrumb items={acaraKampusBreadCumbs} />
        <div className="w-full px-10 py-10 lg:px-20 bg-neutral-100">
          <EventDetail />
        </div>
      </BaseLayout>
    </ErrorBoundary>
  );
};

export default StudyPlanPage;
