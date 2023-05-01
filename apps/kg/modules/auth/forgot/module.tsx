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
import { useForgot } from './hooks';

const { AuthLayout } = lazily(
  () => import('@mknows-frontend-services/modules')
);

const validationSchema = z.object({
  email: z.string().min(1, { message: 'Email harus diisi' }).email({
    message: 'Email harus valid',
  }),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const ForgotModule: FC = (): ReactElement => {
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
      email: '',
    },
  });

  const { mutate, isLoading } = useForgot();

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
          title="Lupa Kata Sandi"
          description="Silahkan masukan email yang sebelumnya terdaftar"
        >
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full justify-start"
          >
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
