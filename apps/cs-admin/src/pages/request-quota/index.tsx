import { FC, lazy, ReactElement, Suspense } from "react";

const RequestQuotaModules = lazy(() => import("../../modules/quota-request/"));

const RequestQuotaPage: FC = (): ReactElement => {
  return (
    <Suspense fallback="loading">
      <RequestQuotaModules />
    </Suspense>
  );
};

export default RequestQuotaPage;
