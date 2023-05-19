import {
  Button,
  Checkbox,
  DashedText,
  TextField,
} from '@mknows-frontend-services/components/atoms';
import { useForm } from 'react-hook-form';
import { FC, ReactElement, Suspense, useEffect, useState } from 'react';
import { lazily } from 'react-lazily';
import { ErrorBoundary } from 'react-error-boundary';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { IconGoogle } from '../icons/ic-google';

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

export const LoginModule: FC = (): ReactElement => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState<string | undefined>(undefined);
  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await signIn('login', {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (response?.ok) {
        router.push('/');
      } else {
        setError(response?.error);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  });

  const onGoogleLogin = async () => {
    await signIn('google', {
      redirect: false,
    });
  };

  useEffect(() => {
    setError(router.query.error as string);
  }, [router.query.error]);

  return (
    <ErrorBoundary fallback={<>{getError}</>}>
      <Suspense fallback={'Loading..'}>
        <AuthLayout
          h="screen"
          error={getError}
          title="Masuk"
          description="Silahkan masuk menggunakan email dan kata sandi yang terdaftar"
        >
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full justify-start"
          >
            <TextField
              type="email"
              variant="md"
              control={control}
              name={'email'}
              placeholder="Masukan Email"
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
            <div className="py-2 flex justify-between items-center ">
              <Checkbox
                name="remember"
                variant="md"
                control={control}
                label="ingat saya"
                className="!text-sm"
              />
              <h1 className="text-version2-400 cursor-pointer font-black text-sm hover:underline ">
                Lupa kata sandi?
              </h1>
            </div>
            <div className="flex flex-col my-4">
              <Button
                type="submit"
                disabled={!isValid}
                loading={loading ? 'Sedang Masuk..' : ''}
                className="disabled:bg-version2-400/60 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 w-full text-base py-4 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2"
              >
                Masuk
              </Button>

              <DashedText text="Atau" />

              <Button
                onClick={onGoogleLogin}
                type="button"
                className="bg-neutral-50 text-neutral-700  hover:bg-neutral-100 hover:text-version2-400 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-neutral-300 flex items-center justify-center gap-3 w-full text-base py-4"
              >
                <IconGoogle /> <span>Masuk Dengan Google</span>
              </Button>
              <div className="flex w-full items-center justify-center my-4 gap-x-2 mb-4 text-sm">
                <span className="text-neutral-700">Belum punya akun?</span>
                <Link
                  className="text-version2-400 hover:underline font-bold"
                  href={'/auth/register'}
                >
                  Daftar Disini
                </Link>
              </div>
            </div>
          </form>
        </AuthLayout>
      </Suspense>
    </ErrorBoundary>
  );
};
