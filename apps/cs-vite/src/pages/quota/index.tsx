import { FC, ReactElement, lazy, Suspense } from 'react';
import LoadingQuota from '../../modules/quota/loading';

const QuotaPage = lazy(() => import('../../modules/quota'));

const QuotaPages: FC = (): ReactElement => {
  return (
    <Suspense fallback={<LoadingQuota />}>
      <QuotaPage />
    </Suspense>
  );
};

export default QuotaPages;
