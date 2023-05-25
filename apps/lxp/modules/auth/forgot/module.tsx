import { PopupModal } from "@mknows-frontend-services/components/molecules";
import { FC, ReactElement } from "react";
import { Button, TextField } from "@mknows-frontend-services/components/atoms";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { usePopupForgotPass } from "./hooks";

export const ForgotModule: FC = (): ReactElement => {
  const { setPopupStatus, getPopupStatus } = usePopupForgotPass();
  const validationSchema = z.object({
    email: z.string().min(1, { message: "Email harus diisi" }).email({
      message: "Email harus valid",
    }),
  });

  type ValidationSchema = z.infer<typeof validationSchema>;
  const {
    control,
    formState: { isValid, errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode: "all",
    defaultValues: {
      email: "",
    },
  });
  return (
    <PopupModal
      onClose={() => setPopupStatus(false)}
      lookup={getPopupStatus}
      className="!w-[100%] text-md md:px-16 sm:px-14"
      popupTitle="Lupa Kata Sandi"
    >
      <div className="mb-5 lg:text-[16px] md:text-[14px]">
        Masukkan alamat email Anda yang terdaftar. Kami akan
        <br />
        mengirimkan kode OTP untuk dapat mengatur ulang kata sandi Anda.
      </div>

      <form className="flex flex-col w-full !justify-end">
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
          <Link href={"/auth/otp"}>
            <Button
              type="submit"
              disabled={!isValid}
              className=" w-fit px-8 py-3 disabled:bg-neutral-400 h-auto text-[16px] text-white rounded-lg border-2 border-neutral-200 appearance-none bg-[#F26800] font-[600] tracking-wide"
            >
              Kirim
            </Button>
          </Link>
        </div>
      </form>
    </PopupModal>
  );
};
