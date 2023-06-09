import { FC, lazy, ReactElement, Suspense } from "react";

const LoginModules = lazy(() => import("../../modules/auth/login"));

const LoginPages: FC = (): ReactElement => {
  return (
    <Suspense fallback="loading">
      <LoginModules />
    </Suspense>
  );
};

export default LoginPages;
