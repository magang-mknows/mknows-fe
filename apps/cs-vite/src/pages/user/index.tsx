import { FC, lazy, ReactElement, Suspense } from 'react';
import { LoadingUser } from '../../modules/user/loading';

const UserModules = lazy(() => import('../../modules/user'));

const UserPages: FC = (): ReactElement => {
  return (
    <Suspense fallback={<LoadingUser />}>
      <UserModules />
    </Suspense>
  );
};

export default UserPages;
