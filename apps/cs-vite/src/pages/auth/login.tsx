import { FC, lazy, ReactElement, Suspense } from 'react';
import { LoadingLogin } from '../../modules/auth/login/loading-login';

const LoginModules = lazy(() => import('../../modules/auth/login'));

const LoginPages: FC = (): ReactElement => {
  return (
    <Suspense fallback={<LoadingLogin />}>
      <LoginModules />
    </Suspense>
  );
};

export default LoginPages;
