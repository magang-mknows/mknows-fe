import { TMetaErrorResponse, TMetaItem } from "@mknows-frontend-services/utils";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TForgotPasswordPayload, TOtpPopup } from "./types";
import { forgotPasswordRequest } from "./api";
import { useRecoilState } from "recoil";
import { PopupOtp } from "./store";

export const useForgot = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TForgotPasswordPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["forgot-password-post"],
    mutationFn: async (payload) => await forgotPasswordRequest(payload),
  });

export const usePopupOtp = (): TOtpPopup => {
  const [get, set] = useRecoilState(PopupOtp);
  return {
    getPopupOtp: get,
    setPopupOtp: (val: boolean) => set(val),
  };
};
