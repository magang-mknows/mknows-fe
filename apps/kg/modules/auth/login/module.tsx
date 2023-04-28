import {
  Button,
  DashedText,
  TextField,
} from '@mknows-frontend-services/components/atoms';
import { useForm } from 'react-hook-form';
import { FC, ReactElement, Suspense } from 'react';
import { lazily } from 'react-lazily';
import { ErrorBoundary } from 'react-error-boundary';
import Link from 'next/link';

const { AuthLayout } = lazily(
  () => import('@mknows-frontend-services/modules')
);

export const LoginModuleKg: FC = (): ReactElement => {
  const { control } = useForm();
  return (
    <ErrorBoundary fallback={<>Error</>}>
      <Suspense fallback={'Loading..'}>
        <AuthLayout title="Masuk" description="Selamat datang silahkan masuk">
          <form className="flex flex-col w-full justify-start">
            <TextField
              type="email"
              variant="lg"
              control={control}
              name={'email'}
              placeholder="maulana@sodiqin.com"
              label="Email"
              status="none"
            />
            <TextField
              type="password"
              variant="lg"
              control={control}
              name={'password'}
              placeholder="************"
              label="Kata Sandi"
              status="none"
            />
            <div className="flex w-full gap-x-4">
              <span>Sudah punya akun?</span>
              <Link className="text-blue-400" href={'/auth/register'}>
                Daftar Sekarang
              </Link>
            </div>
            <div className="flex flex-col">
              <Button
                type="button"
                className="w-auto h-auto p-4 rounded-lg border-2 border-error-500 appearance-none bg-primary-base font-[700]"
              >
                Masuk
              </Button>

              <DashedText text="Atau" />

              <Button
                type="button"
                className="w-auto h-auto p-4 rounded-lg border-2 border-error-500 appearance-none bg-primary-base font-[700]"
              >
                Masuk Dengan Google
              </Button>
            </div>
          </form>
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  );
};
