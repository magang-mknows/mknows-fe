import React, { FC, Fragment, ReactElement, lazy } from 'react';
// import BaseLayouts from "@/layouts/Base";
// import SuspenseError from "../Common/SuspenseError";
// import SemuaFiturSkeleton from "@/components/Loading/SemuaFitur/SemuaFiturSkeleton";

const Features = lazy(() => import('./section/Features'));

export const AllFeatures: FC = (): ReactElement => {
  return (
    <div>
      {/* <SuspenseError loadingFallback={<SemuaFiturSkeleton/>}> */}
      {/* <BaseLayouts> */}
      <Fragment>
        <Features />
      </Fragment>
      {/* </BaseLayouts> */}
      {/* </SuspenseError> */}
    </div>
  );
};

