export type TOTPPayload = {
  otp: string;
  email: string;
};

export type TOTPRequestPayload = {
  email: string;
};

export type TOTPProps = {
  email: string;
};

export type TOtpPopup = {
  setPopupOtp: (val: boolean) => void;
  getPopupOtp: boolean;
};
