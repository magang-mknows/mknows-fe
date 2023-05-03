import { FC, ReactElement, lazy } from 'react';

const QuotaPage = lazy(() => import('../../modules/quota'));

const QuotaPages: FC = (): ReactElement => {
  return (
    <section>
      <QuotaPage />
    </section>
  );
};

export default QuotaPages;
