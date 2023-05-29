import { atom } from "recoil";

export const LoginPopupState = atom<boolean>({
  key: "login-modal-state",
  default: false,
});

export const ForgotPasswordPopupState = atom<boolean>({
  key: "forgot-popup-modal-state",
  default: false,
});
