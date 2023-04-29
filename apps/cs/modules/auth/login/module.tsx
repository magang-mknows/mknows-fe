import { FC, ReactElement, Suspense } from 'react';
import {
  Button,
  TextField,
  Checkbox,
} from '@mknows-frontend-services/components/atoms';
import { useForm } from 'react-hook-form';
import { lazily } from 'react-lazily';
import { ErrorBoundary } from 'react-error-boundary';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const { LoginLayout } = lazily(() => import('./layout'));

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email harus diisi' }).email({
    message: 'Email harus valid',
  }),
  password: z.string().min(1, { message: 'Password harus diisi' }),
  remember: z.boolean().optional(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const LoginModule: FC = (): ReactElement => {
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
    <ErrorBoundary fallback={<h1>Error nih</h1>}>
      <Suspense fallback={'Loading..'}>
        <LoginLayout>
          <section className="bg-white items-center justify-center p-6 shadow-gray-300 shadow-lg  w-[400px] h-auto rounded-sm">
            <h1 className="text-primary-base text-center font-[600] font-sans text-5xl">
              Masuk
            </h1>
            <p className="text-base text-gray-400 text-center">
              Silahkan masuk dengan email dan kata sandi anda
            </p>
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
            <div className="flex w-full my-4">
              <Checkbox
                name="remember"
                variant="md"
                control={control}
                label="Ingatkan Saya"
              />
            </div>
            <Link href={'/dashboard/home'}>
              <Button
                type="submit"
                disabled={!isValid}
                className="flex disabled:bg-neutral-200 justify-center w-full p-3 rounded-md border bg-primary-400 text-white font-bold"
              >
                Masuk
              </Button>
            </Link>
          </section>
        </LoginLayout>
      </Suspense>
    </ErrorBoundary>
  );
};
