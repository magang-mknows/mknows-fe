import { ELoginModule, LLoginModule } from '@mknows-frontend-services/modules';
import { FC, ReactElement, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { lazily } from 'react-lazily';

const { AuthLayout } = lazily(
  () => import('@mknows-frontend-services/modules')
);

export const LoginModuleKg: FC = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<ELoginModule />}>
      <Suspense fallback={<LLoginModule />}>
        <AuthLayout>
          <span>Login Gaes</span>
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  );
};
