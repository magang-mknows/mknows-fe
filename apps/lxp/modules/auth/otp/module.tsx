import { PopupModal } from "@mknows-frontend-services/components/molecules";
import { FC, ReactElement, useEffect, useRef, useState } from "react";
import OtpInput from "react-otp-input";
import { useOtpRequest, useOtpVerify, usePopupOtp } from "./hooks";
import { TOTPProps } from "./types";
import clsx from "clsx";
import { useRouter } from "next/router";

export const OtpModule: FC<TOTPProps> = (props): ReactElement => {
  const [isError, setIsError] = useState(false);
  const { setPopupOtp, getPopupOtp } = usePopupOtp();
  const [otp, setOtp] = useState("");
  const { mutate: request } = useOtpRequest();
  const { mutate: verify } = useOtpVerify();
  const { push } = useRouter();

  const [timer, setTimer] = useState(60);

  const intervalRef = useRef<any>();

  const decreaseNum = () => setTimer((prev) => prev - 1);
  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (otp.length === 6) {
      verify(
        {
          email: props.email,
          otp,
        },
        {
          onSuccess: () => {
            setPopupOtp(false);
            push("/auth/login");
          },
          onError: (error) => {
            setOtp("");
            setIsError(true);
          },
        },
      );
    }
  }, [otp]);

  const inputStyle = clsx(
    "!w-[64px] text-black focus:outline-none outline-none placeholder:text-black placeholder:p-2 !h-[64px] text-[28px] p-2 rounded-lg w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  shadow-sm ",
    {
      "border border-neutral-100  bg-neutral-100": !isError,
      "border border-error-base bg-error-100": isError,
    },
  );

  return (
    <PopupModal
      onClose={() => setPopupOtp(false)}
      lookup={getPopupOtp}
      className=" px-4 text-md"
      popupTitle="Verifikasi OTP"
      description={`Masukkan kode OTP yang telah dikirimkan ke ${props.email}`}
    >
      <div className="flex flex-col w-full">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          shouldAutoFocus
          inputStyle={inputStyle}
          containerStyle={"flex gap-x-5 items-center justify-center"}
          inputType="number"
          renderInput={(props) => <input {...props} />}
        />
        <div className="flex w-full  justify-center pt-4 ">
          <span>
            Belum menerima kode?{" "}
            <span
              onClick={() => {
                setTimer(60);
                request({
                  email: props.email,
                });
              }}
              ref={intervalRef}
              className="text-blue-600 cursor-pointer hover:underline font-bold"
            >
              {timer < 0 ? "kirim ulang" : timer}
            </span>
          </span>
        </div>
      </div>
    </PopupModal>
  );
};
