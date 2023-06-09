import { useRecoilState } from "recoil";
import { PopupOtp } from "./store";
import { TOTPPayload, TOtpPopup, TOTPRequestPayload } from "./types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TMetaErrorResponse, TMetaItem } from "@mknows-frontend-services/utils";
import { otpRequest, otpVerify } from "./api";

export const useOtpVerify = (): UseMutationResult<TMetaItem, TMetaErrorResponse, TOTPPayload> =>
  useMutation({
    mutationKey: ["otp-verify"],
    mutationFn: async (payload) => otpVerify(payload),
  });

export const useOtpRequest = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TOTPRequestPayload
> =>
  useMutation({
    mutationKey: ["otp-request"],
    mutationFn: async (payload) => otpRequest(payload),
  });

export const usePopupOtp = (): TOtpPopup => {
  const [get, set] = useRecoilState(PopupOtp);
  return {
    getPopupOtp: get,
    setPopupOtp: (val: boolean) => set(val),
  };
};
