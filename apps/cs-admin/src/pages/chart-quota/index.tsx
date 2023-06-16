import { FC, lazy, ReactElement, Suspense } from "react";

const ChartQuotaModules = lazy(() => import("../../modules/chart-quota"));

const ChartQuotaPages: FC = (): ReactElement => {
  return (
    <Suspense fallback="loading">
      <ChartQuotaModules />
    </Suspense>
  );
};

export default ChartQuotaPages;
