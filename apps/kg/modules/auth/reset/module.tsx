import {
  Button,
  LoadingSpinner,
  TextField,
} from '@mknows-frontend-services/components/atoms';
import { useForm } from 'react-hook-form';
import { FC, ReactElement, Suspense, useEffect, useState } from 'react';
import { lazily } from 'react-lazily';
import { ErrorBoundary } from 'react-error-boundary';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/router';
import { useResetPassword } from './hooks';

const { AuthLayout } = lazily(
  () => import('@mknows-frontend-services/modules')
);

const validationSchema = z
  .object({
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

export const ResetModule: FC = (): ReactElement => {
  const router = useRouter();
  const [getError, setError] = useState<string | undefined>(undefined);
  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      password: '',
      password_confirmation: '',
    },
  });

  const { mutate, isLoading } = useResetPassword();

  const onSubmit = handleSubmit(async (data) => {
    mutate(data, {
      onSuccess: () => router.push('/auth/email-sent'),
      onError: (e) => setError(e.response?.data?.message),
    });
  });

  useEffect(() => {
    setError(router.query.error as string);
  }, [router.query.error]);

  return (
    <ErrorBoundary fallback={<>{getError}</>}>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthLayout
          h="screen"
          error={getError}
          title="Reset Kata Sandi"
          description="Silahkan masukan kata sandi yang mudah di ingat namun kuat"
        >
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full justify-start"
          >
            <TextField
              type="password"
              variant="lg"
              control={control}
              name={'password'}
              placeholder="********"
              label="Kata sandi"
              status={errors.password ? 'error' : 'none'}
              message={errors.password?.message}
            />
            <TextField
              type="password"
              variant="lg"
              control={control}
              name={'password_confirmation'}
              placeholder="*********"
              label="Konfirmasi Kata sandi"
              status={errors.password_confirmation ? 'error' : 'none'}
              message={errors.password_confirmation?.message}
            />

            <div className="flex flex-col my-4">
              <Button
                type="submit"
                disabled={!isValid}
                loading={isLoading ? 'Sedang Mengirim Permintaan...' : ''}
                className="w-auto disabled:bg-neutral-300 h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700]"
              >
                Reset Sekarang
              </Button>

              <div className="flex w-full items-center justify-center my-4 gap-x-4 mb-4 font-[500] text-[18px] text-neutral-500">
                <span>Sudah Ingat Password nya?</span>
                <Link className="text-primary-600" href={'/auth/register'}>
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
