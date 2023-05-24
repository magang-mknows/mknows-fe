import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FC, ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FcGoogle } from 'react-icons/fc';
import { ImSpinner5 } from 'react-icons/im';
import { ErrorBoundary } from 'react-error-boundary';
import { useSetRecoilState } from 'recoil';
import { ForgotPasswordPopupState, LoginPopupState } from './store';
import {
  Button,
  Checkbox,
  DashedText,
  TextField,
} from '@mknows-frontend-services/components/atoms';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export const LoginFormPopup: FC = (): ReactElement => {
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState<string | undefined>(undefined);

  const setForgotPopup = useSetRecoilState(ForgotPasswordPopupState);
  const setLoginPopup = useSetRecoilState(LoginPopupState);

  const validationSchema = z.object({
    email: z.string().min(1, { message: 'Email harus diisi' }).email({
      message: 'Email harus valid',
    }),
    password: z.string().min(1, { message: 'Password harus diisi' }),
    remember: z.boolean(),
  });
  const openForgot = () => {
    setLoginPopup(false);
    setForgotPopup(true);
  };
  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: 'all',
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  });
  const router = useRouter();
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
        setLoginPopup(false);
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
      <form
        onSubmit={onSubmit}
        className=" flex flex-col px-8 md:px-10 lg:px-14 -mt-4 pb-10"
      >
        <section className="flex flex-col w-full gap-y-1 mb-6 mt-10">
          <h1 className="text-left md:text-center font-bold text-4xl">Masuk</h1>
          <p className="text-left md:text-center text-sm">
            Silahkan masuk menggunakan email dan kata sandi yang terdaftar{' '}
          </p>
        </section>
        {getError && (
          <span className="bg-warning-100/30 mb-4 text-warning-500 w-full text-xs p-4 rounded-lg border-2 border-error-500 flex justify-between">
            <strong>Oppss.. {getError}</strong>
            <span onClick={() => setError('')} className="text-right">
              x
            </span>
          </span>
        )}
        <section className="flex flex-col mb-4">
          <TextField
            labelClassName="!text-sm text-left"
            type="email"
            variant="md"
            control={control}
            name={'email'}
            placeholder="bangrudy@gmail.com"
            label="Email"
            status={errors.email ? 'error' : 'none'}
            message={errors.email?.message}
            className="!h-[46px] text-sm !rounded-[8px] !border-2 !border-[#A3A3A3]"
          />
          <TextField
            labelClassName="!text-sm text-left"
            type="password"
            variant="md"
            control={control}
            name={'password'}
            placeholder="**********"
            label="Password"
            status={errors.password ? 'error' : 'none'}
            message={errors.password?.message}
            className="!h-[46px] text-sm !rounded-[8px] !border-2 !border-[#A3A3A3]"
          />
        </section>

        <div className="flex justify-between items-center w-full -mt-4 pt-1 mb-8">
          <Checkbox
            name="remember"
            control={control}
            variant="sm"
            label="Remember me"
          />
          <section
            className="text-version2-400 font-bold text-xs md:text-sm  hover:underline cursor-pointer"
            onClick={() => openForgot()}
          >
            Lupa Password akun-mu?
          </section>
        </div>

        <div className="flex flex-col gap-y-1 ">
          <Button
            type="submit"
            className="font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 w-full text-sm py-4  disabled:border-none text-neutral-100 hover:bg-version2-300 hover:border-version2-300 !bg-version2-400 disabled:!bg-version2-400/60 !border-none"
            disabled={!isValid}
          >
            <h1>Masuk</h1>
            {loading ? (
              <ImSpinner5 className="animate-spin duration-200 delay-150" />
            ) : null}
          </Button>
          <DashedText />
          <Button
            onClick={onGoogleLogin}
            type="button"
            className="bg-neutral-50 !border-neutral-500 border-[1px] !text-neutral-500 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300 flex items-center justify-center gap-2 w-full text-sm py-4  hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400"
          >
            <FcGoogle className="text-xl" />
            <h1>Masuk Dengan Google</h1>
          </Button>

          <div className="flex justify-center pt-2">
            <h1 className="text-xs md:text-sm">
              Belum punya akun ?
              <span
                className="text-version2-400 font-bold  hover:underline cursor-pointer"
                onClick={() => {
                  setLoginPopup(false);
                }}
              >
                <Link href={'auth/register'}> Daftar disini</Link>
              </span>
            </h1>
          </div>
        </div>
      </form>
    </ErrorBoundary>
  );
};
