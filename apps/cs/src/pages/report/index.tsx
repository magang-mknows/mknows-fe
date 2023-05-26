import { FC, ReactElement, Suspense, lazy } from "react";
import { LoadingReport } from "../../modules/report/loading";

const ReportPage = lazy(() => import("../../modules/report"));

const ReportPages: FC = (): ReactElement => {
  return (
    <Suspense fallback={<LoadingReport />}>
      <ReportPage />
    </Suspense>
  );
};

export default ReportPages;
