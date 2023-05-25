/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  DashedText,
  LoadingSpinner,
  TextField,
} from "@mknows-frontend-services/components/atoms";
import { useForm } from "react-hook-form";
import { FC, ReactElement, Suspense, useState } from "react";
import { lazily } from "react-lazily";
import { ErrorBoundary } from "react-error-boundary";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { IconGoogle } from "../icons/ic-google";
import { useRegister } from "./hook";

const { AuthLayout } = lazily(() => import("@mknows-frontend-services/modules"));

const validationSchema = z
  .object({
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    full_name: z.string().min(2, { message: "Nama Lengkap harus diisi" }),
    password: z.string().min(1, { message: "Password harus diisi" }),
    password_confirmation: z.string().min(1, { message: "Konfirmasi kata sandi harus disisi" }),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Konfirmasi kata sandi tidak valid",
    path: ["password_confirmation"],
  });

type ValidationSchema = z.infer<typeof validationSchema>;

export const RegisterModule: FC = (): ReactElement => {
  const router = useRouter();
  const [getError, setError] = useState<string>("");
  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
      full_name: "",
      password: "",
      password_confirmation: "",
    },
  });

  const { mutate, isLoading } = useRegister();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => router.push("/auth/login"),
      onError: (e) => {
        console.log(e.response?.data.message);
        setError(e.response?.data.message as string);
      },
    });
  });

  const onGoogleLogin = async () => {
    await signIn("google", {
      redirect: false,
    });
  };

  return (
    <ErrorBoundary fallback={<>{getError}</>}>
      <Suspense fallback={<LoadingSpinner />}>
        <AuthLayout
          h="full"
          error={getError}
          title="Daftar Akun"
          description="Silahkan isi data berikut untuk melakukan pendaftaran"
        >
          <form onSubmit={onSubmit} className="flex flex-col w-full justify-start">
            <TextField
              type="text"
              variant="lg"
              control={control}
              name={"full_name"}
              placeholder="Maulana Sodiqin"
              label="Nama Lengkap"
              status={errors.full_name ? "error" : "none"}
              message={errors.full_name?.message}
            />
            <TextField
              type="email"
              variant="lg"
              control={control}
              name={"email"}
              placeholder="maulana@sodiqin.com"
              label="Email"
              status={errors.email ? "error" : "none"}
              message={errors.email?.message}
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
            />
            <TextField
              type="password"
              variant="lg"
              control={control}
              name={"password_confirmation"}
              placeholder="************"
              label="Konfirmasi Kata Sandi"
              status={errors.password_confirmation ? "error" : "none"}
              message={errors.password_confirmation?.message}
            />
            <div className="flex flex-col my-4">
              <Button
                type="submit"
                disabled={!isValid}
                loading={isLoading ? "Sedang Memuat..." : ""}
                className="w-auto disabled:bg-neutral-300 h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700]"
              >
                Daftar Sekarang
              </Button>

              <DashedText text="Atau" />

              <Button
                onClick={onGoogleLogin}
                type="button"
                className="w-auto h-auto text-[18px] text-black p-3 rounded-lg border-2 border-neutral-300 appearance-none bg-white font-[700] flex items-center justify-center gap-x-4"
              >
                <IconGoogle /> <span>Daftar Dengan Google</span>
              </Button>
              <div className="flex w-full items-center justify-center my-4 gap-x-4 mb-4 font-[500] text-[18px] text-neutral-500">
                <span>Sudah punya akun?</span>
                <Link className="text-primary-600" href={"/auth/login"}>
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