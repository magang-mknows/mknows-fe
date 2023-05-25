import React, { FC, ReactElement, lazy } from "react";
import { BaseLayout } from "../common";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { allFeatures } from "../administration/constant";
// import BaseLayouts from "@/layouts/Base";
// import SuspenseError from "../Common/SuspenseError";
// import SemuaFiturSkeleton from "@/components/Loading/SemuaFitur/SemuaFiturSkeleton";

const Features = lazy(() => import("./section/Features"));

export const AllFeatures: FC = (): ReactElement => {
  return (
    <div>
      {/* <SuspenseError loadingFallback={<SemuaFiturSkeleton/>}> */}
      <BaseLayout title="Semua Fitur">
        <BreadCrumb items={allFeatures} />
        <Features />
      </BaseLayout>
      {/* </SuspenseError> */}
    </div>
  );
};
