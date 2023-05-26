import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TPasswordPayload, TPasswordResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { UpdatePassword } from "./api";

export const useUpdatePassword = (): UseMutationResult<
  TPasswordResponse,
  TMetaErrorResponse,
  TPasswordPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ["update-password"],
    mutationFn: async (payload) => await UpdatePassword(payload),
  });
};
