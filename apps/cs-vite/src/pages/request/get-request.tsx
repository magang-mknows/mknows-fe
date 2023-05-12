import { FC, ReactElement, Suspense, lazy } from 'react';
import LoadingRequest from '../../modules/request/loading';

const ResultRequest = lazy(() => import('../../modules/request/get-request'));

const GetRequest: FC = (): ReactElement => {
  return (
    <Suspense fallback={<LoadingRequest />}>
      <ResultRequest />
    </Suspense>
  );
};

export default GetRequest;
