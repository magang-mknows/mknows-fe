import { FC, ReactElement, Suspense, lazy } from "react";
import LoadingRequest from "../../modules/request/loading";

const RequestPage = lazy(() => import("../../modules/request"));

const RequestPages: FC = (): ReactElement => {
  return (
    <Suspense fallback={<LoadingRequest />}>
      <RequestPage />
    </Suspense>
  );
};

export default RequestPages;
