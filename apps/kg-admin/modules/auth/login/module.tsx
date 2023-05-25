import { Button, LoadingSpinner, TextField } from "@mknows-frontend-services/components/atoms";
import { useForm } from "react-hook-form";
import { FC, ReactElement, Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const validationSchema = z.object({
  email: z.string().min(1, { message: "Email harus diisi" }).email({
    message: "Email harus valid",
  }),
  password: z
    .string()
    .min(1, { message: "Password harus diisi" })
    .min(8, { message: "Password setidaknya ada 8 karakter atau lebih" }),
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
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);
    const response = await signIn("login", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    if (response?.ok) {
      router.push("/dashboard");
    }
    setLoading(false);
  });

  useEffect(() => {
    setError(router.query.error as string);
  }, [router.query.error]);

  return (
    <ErrorBoundary fallback={<>{getError}</>}>
      <Suspense fallback={<LoadingSpinner />}>
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
            placeholder="Masukkan Kata Sandi Anda"
            label="Kata Sandi"
            status={errors.password ? "error" : "none"}
            message={errors.password?.message}
            required
          />
          <div className="flex w-full justify-end my-2">
            <Link href="/auth/forgot" className="text-primary-600 cursor-pointer">
              Lupa Kata Sandi?
            </Link>
          </div>
          <div className="flex flex-col my-4">
            <Button
              type="submit"
              disabled={!isValid}
              loading={loading ? "Sedang Masuk.." : undefined}
              className="w-auto disabled:bg-neutral-300 h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700]"
            >
              Masuk
            </Button>
          </div>
        </form>
      </Suspense>
    </ErrorBoundary>
  );
};
