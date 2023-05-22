/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  DashedText,
  TextField,
} from '@mknows-frontend-services/components/atoms';
import { useForm } from 'react-hook-form';
import { FC, ReactElement, Suspense, useState } from 'react';
import { lazily } from 'react-lazily';
import { ErrorBoundary } from 'react-error-boundary';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { IconGoogle } from '../icons/ic-google';
import { useRegister } from './hook';

const { AuthLayout } = lazily(
  () => import('@mknows-frontend-services/modules')
);

const validationSchema = z
  .object({
    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
    full_name: z.string().min(2, { message: 'Nama Lengkap harus diisi' }),
    password: z.string().min(1, { message: 'Password harus diisi' }),
    password_confirmation: z
      .string()
      .min(1, { message: 'Konfirmasi kata sandi harus disisi' }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: 'Konfirmasi kata sandi tidak valid',
    path: ['password_confirmation'],
  });

type ValidationSchema = z.infer<typeof validationSchema>;

export const RegisterModule: FC = (): ReactElement => {
  const router = useRouter();
  const [getError, setError] = useState<string>('');
  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      full_name: '',
      email: '',
      password: '',
      password_confirmation: '',
    },
  });

  const { mutate, isLoading } = useRegister();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => router.push('/'),
      onError: (e) => {
        console.log(e.response?.data.message);
        setError(e.response?.data.message as string);
      },
    });
  });

  const onGoogleLogin = async () => {
    await signIn('google', {
      redirect: false,
    });
  };

  return (
    <ErrorBoundary fallback={<>{getError}</>}>
      <Suspense fallback={'Loading..'}>
        <AuthLayout
          h="full"
          error={getError}
          title="Daftar Akun"
          description="Silahkan isi data berikut untuk melakukan pendaftaran"
        >
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full justify-start"
          >
            <TextField
              type="text"
              variant="md"
              control={control}
              name={'full_name'}
              placeholder="Masukan Nama Lengkap Anda"
              label="Nama Lengkap"
              status={errors.full_name ? 'error' : 'none'}
              message={errors.full_name?.message}
            />

            <TextField
              type="email"
              variant="md"
              control={control}
              name={'email'}
              placeholder="Masukan Email Anda"
              label="Email"
              status={errors.email ? 'error' : 'none'}
              message={errors.email?.message}
            />
            <TextField
              type="password"
              variant="md"
              control={control}
              name={'password'}
              placeholder="Masukan Kata Sandi"
              label="Kata Sandi"
              status={errors.password ? 'error' : 'none'}
              message={errors.password?.message}
            />
            <TextField
              type="password"
              variant="md"
              control={control}
              name={'password_confirmation'}
              placeholder="Konfirmasi Kata Sandi"
              label="Konfirmasi Kata Sandi"
              status={errors.password_confirmation ? 'error' : 'none'}
              message={errors.password_confirmation?.message}
            />
            <div className="flex flex-col my-4">
              <Button
                type="submit"
                loading={isLoading ? 'Mendaftarkan akun...' : ''}
                className="font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 w-full text-sm py-5  disabled:border-none text-neutral-100 hover:bg-version2-300 hover:border-version2-300 !bg-version2-400 disabled:!bg-version2-400/60 !border-none"
                disabled={!isValid}
              >
                Daftar
              </Button>

              <DashedText text="Atau" />

              <Button
                onClick={onGoogleLogin}
                type="button"
                className="bg-neutral-50 text-neutral-700  hover:bg-neutral-100 hover:text-version2-400 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-neutral-300 flex items-center justify-center gap-3 w-full text-base py-4"
              >
                <IconGoogle /> <span>Daftar Dengan Google</span>
              </Button>
              <div className="flex w-full items-center justify-center my-4 gap-x-2 mb-4 text-sm">
                <span className="text-neutral-700">Sudah punya akun?</span>
                <Link
                  className="text-version2-400 hover:underline font-bold"
                  href={'/auth/login'}
                >
                  Masuk Disini
                </Link>
              </div>
            </div>
          </form>
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  );
};
