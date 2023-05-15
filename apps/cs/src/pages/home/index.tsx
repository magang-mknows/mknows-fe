import { FC, lazy, ReactElement, Suspense } from 'react';
import { LoadingHome } from '../../modules/home/loading';

const HomeModules = lazy(() => import('../../modules/home'));

const HomePages: FC = (): ReactElement => {
  return (
    <Suspense fallback={<LoadingHome />}>
      <HomeModules />
    </Suspense>
  );
};

export default HomePages;
