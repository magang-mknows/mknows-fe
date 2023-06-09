import {
  Button,
  Checkbox,
  DashedText,
  LoadingSpinner,
  TextField,
} from "@mknows-frontend-services/components/atoms";
import { useForm } from "react-hook-form";
import { FC, ReactElement, Suspense, useEffect, useState } from "react";
import { lazily } from "react-lazily";
import { ErrorBoundary } from "react-error-boundary";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { IconGoogle } from "../icons/ic-google";

import { usePopupForgotPass } from "../forgot/hooks";
import { ForgotModule } from "../forgot";

const { AuthLayout } = lazily(() => import("@mknows-frontend-services/modules"));

const validationSchema = z.object({
  email: z.string().min(1, { message: "Email harus diisi" }).email({
    message: "Email harus valid",
  }),
  password: z.string().min(1, { message: "Password harus diisi" }),
  remember: z.boolean().optional(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export const LoginModule: FC = (): ReactElement => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { setPopupStatus } = usePopupForgotPass();
  const [getError, setError] = useState<string | undefined>(undefined);
  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    try {
      const response = await signIn("login", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (response?.ok) {
        router.push("/dashboard");
      } else {
        setError(response?.error);
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  });

  const onGoogleLogin = async () => {
    const res = await signIn("google", {
      redirect: false,
    });
    if (res?.ok) {
      router.push("./dashboard");
    }
  };

  useEffect(() => {
    setError(router.query.error as string);
  }, [router.query.error]);

  return (
    <ErrorBoundary fallback={<>{getError}</>}>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthLayout
          h="screen"
          error={getError}
          title="Masuk"
          description="Silahkan masuk menggunakan email dan kata sandi yang terdaftar"
        >
          <form onSubmit={onSubmit} className="flex flex-col w-full justify-start">
            <TextField
              type="email"
              variant="lg"
              control={control}
              name={"email"}
              placeholder="Masukkan Email Anda"
              label="Email"
              status={errors.email ? "error" : "none"}
              message={errors.email?.message}
              required
            />
            <TextField
              type="password"
              variant="lg"
              control={control}
              name={"password"}
              placeholder="************"
              label="Kata Sandi"
              status={errors.password ? "error" : "none"}
              message={errors.password?.message}
              required
            />
            <div className="flex w-full justify-between my-2">
              <Checkbox variant="lg" control={control} name={"remember"} label="Ingat Saya" />
              <div
                className="text-primary-base cursor-pointer"
                onClick={() => setPopupStatus(true)}
              >
                Lupa Kata Sandi?
              </div>
            </div>
            <div className="flex flex-col my-4">
              <Button
                type="submit"
                disabled={!isValid}
                loading={loading ? "Sedang Masuk.." : ""}
                className="w-auto disabled:bg-neutral-300 h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700]"
              >
                Masuk
              </Button>

              <DashedText text="Atau" />

              <Button
                onClick={onGoogleLogin}
                type="button"
                className="w-auto h-auto text-[18px] text-black p-3 rounded-lg border-2 border-neutral-300 appearance-none bg-white font-[700] flex items-center justify-center gap-x-4"
              >
                <IconGoogle /> <span>Masuk Dengan Google</span>
              </Button>
              <div className="flex w-full items-center justify-center my-4 gap-x-4 mb-4 font-[500] text-[18px] text-neutral-500">
                <span>Belum punya akun?</span>
                <Link className="text-primary-600" href={"/auth/register"}>
                  Daftar Disini
                </Link>
              </div>
            </div>
          </form>
        </AuthLayout>
        <ForgotModule />
      </Suspense>
    </ErrorBoundary>
  );
};
