export type TForgotPasswordPayload = {
  email: string;
};

export type TusePopupForgotPass = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};
