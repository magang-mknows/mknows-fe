import { atom } from "recoil";

export const PopupOtp = atom<boolean>({
  key: "modal-popup-otp-lxp",
  default: false,
});
