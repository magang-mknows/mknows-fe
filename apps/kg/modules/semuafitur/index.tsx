import React, { FC, ReactElement, lazy } from "react";
import { BaseLayout } from "../common";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { allFeatures } from "../administration/constant";

const Features = lazy(() => import("./section/Features"));

export const AllFeatures: FC = (): ReactElement => {
  return (
    <div>
      <BaseLayout title="Semua Fitur">
        <BreadCrumb items={allFeatures} />
        <Features />
      </BaseLayout>
    </div>
  );
};
