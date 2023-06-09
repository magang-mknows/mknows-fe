export type TForgotPasswordPayload = {
  email: string;
};

export type TOtpPopup = {
  setPopupOtp: (val: boolean) => void;
  getPopupOtp: boolean;
};
