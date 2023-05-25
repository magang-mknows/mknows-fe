import { TMetaErrorResponse, TMetaItem } from "@mknows-frontend-services/utils";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TResetPasswordPayload } from "./types";
import { resetPasswordRequest } from "./api";

export const useResetPassword = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TResetPasswordPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["reset-password-request-by-login"],
    mutationFn: async (payload) => await resetPasswordRequest(payload),
  });
