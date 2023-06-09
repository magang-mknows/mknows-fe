import { PopupModal } from "@mknows-frontend-services/components/molecules";
import { FC, ReactElement, useState } from "react";
import OtpInput from "react-otp-input";
import { usePopupOtp } from "./hooks";

export const OtpModule: FC = (): ReactElement => {
  const { setPopupOtp, getPopupOtp } = usePopupOtp();
  const [otp, setOtp] = useState("");

  return (
    <PopupModal
      onClose={() => setPopupOtp(false)}
      lookup={getPopupOtp}
      className="!w-[100%] text-md md:px-16 sm:px-14"
      popupTitle="Verifikasi OTP"
    >
      <form className="flex flex-col w-full !justify-end">
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
      </form>
    </PopupModal>
  );
};
