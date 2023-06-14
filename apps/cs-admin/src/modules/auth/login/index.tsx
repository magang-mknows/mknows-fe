import { FC, ReactElement } from "react";
import { Button, TextField, Checkbox } from "@mknows-frontend-services/components/atoms";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginModules: FC = (): ReactElement => {
  const validationSchema = z.object({
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
    password: z.string().min(1, { message: "Password harus diisi" }),
    remember: z.boolean().optional(),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const { control, formState } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });
  return (
    <form className="bg-white items-center justify-center px-8 py-4 shadow-gray-300 shadow-lg lg:w-[512px] w-[400px] h-auto rounded-sm overflow-hidden">
      <div className="space-y-5">
        <h1 className="text-primary-base text-center font-semibold font-sans text-4xl">Masuk</h1>
        <p className="lg:text-base text-sm text-gray-400 text-center">
          Silahkan masuk dengan email dan kata sandi anda
        </p>
      </div>
      <div className="flex bg-error-100 rounded-md text-error-300 w-full justify-center my-2"></div>
      <div className="lg:py-6 py-0 space-y-4">
        <TextField
          type="email"
          label="Email"
          name="email"
          control={control}
          placeholder="admin@email.com"
          status={formState.errors.email ? "error" : "none"}
          message={formState.errors.email?.message}
          variant="lg"
          required
          rules={{
            required: true,
          }}
        />
        <TextField
          type="password"
          label="Password"
          name="password"
          required
          status={formState.errors.password ? "error" : "none"}
          message={formState.errors.password?.message}
          rules={{
            required: true,
          }}
          placeholder="Masukkan Password Anda"
          control={control}
          variant="md"
        />
        <Checkbox name="remember" variant="md" control={control} label="Ingatkan Saya" />
      </div>
      <Button
        type="submit"
        loading="Sedang Masuk..."
        className="flex disabled:bg-neutral-200 justify-center w-full p-3 mt-8 rounded-md border bg-primary-400 text-white font-bold"
        disabled={!formState.isValid}
      >
        Masuk
      </Button>
    </form>
  );
};

export default LoginModules;
