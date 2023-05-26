import { FC, ReactElement } from "react";
import { Button, TextField } from "@mknows-frontend-services/components/atoms";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForgot } from "./hooks";
import { useRouter } from "next/router";
import { useErrorMessage } from "../common/hook";

export const ForgotModule: FC = (): ReactElement => {
  const router = useRouter();

  const validationSchema = z.object({
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;

  const {
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
    },
  });

  const { mutate } = useForgot();

  const { set: setError } = useErrorMessage();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => router.push("/otp"),
      onError: (err) => setError(err?.response?.data?.message as string),
    });
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-full !justify-end">
      <label className="text-start font-[500] text-[16px] mb-1">
        Email
        <TextField
          type="email"
          variant="lg"
          name={"email"}
          control={control}
          placeholder="Masukan email"
          status={errors.email ? "error" : "none"}
          message={errors.email?.message}
        />
      </label>

      <div className="flex justify-center text-center w-full">
        <Button
          type="submit"
          disabled={!isValid}
          className=" w-full px-8 py-3 disabled:bg-neutral-400 h-auto text-[16px] text-white rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[600] tracking-wide"
        >
          Kirim
        </Button>
      </div>
    </form>
  );
};
