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
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const { AuthLayout } = lazily(
  () => import('@mknows-frontend-services/modules')
);

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email harus diisi' }).email({
    message: 'Email harus valid',
  }),
  password: z.string().min(1, { message: 'Password harus diisi' }),
  remember: z.boolean().optional(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const LoginModuleKg: FC = (): ReactElement => {
  const {
    control,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  return (
    <ErrorBoundary fallback={<>Error</>}>
      <Suspense fallback={'Loading..'}>
        <AuthLayout
          error="Waduh Error"
          title="Masuk"
          description="Selamat datang silahkan masuk"
        >
          <form className="flex flex-col w-full justify-start">
            <TextField
              type="email"
              variant="lg"
              control={control}
              name={'email'}
              placeholder="maulana@sodiqin.com"
              label="Email"
              status={errors.email ? 'error' : 'none'}
              message={errors.email?.message}
            />
            <TextField
              type="password"
              variant="lg"
              control={control}
              name={'password'}
              placeholder="************"
              label="Kata Sandi"
              status={errors.password ? 'error' : 'none'}
              message={errors.password?.message}
            />
            <div className="flex w-full gap-x-4 mb-4">
              <span>Sudah punya akun?</span>
              <Link className="text-primary-base" href={'/auth/register'}>
                Daftar Sekarang
              </Link>
            </div>
            <div className="flex flex-col my-4">
              <Button
                type="button"
                disabled={!isValid}
                className="w-auto disabled:bg-neutral-300 h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700]"
              >
                Masuk
              </Button>

              <DashedText text="Atau" />

              <Button
                type="button"
                className="w-auto h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700]"
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
