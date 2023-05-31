import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { fileIdentityRequest } from "./api";
import { TIdentityFile, TIdentityResponse } from "./types";

export const useIdentityInformation = (): UseMutationResult<
  TIdentityResponse,
  TMetaErrorResponse,
  TIdentityFile,
  unknown
> => {
  return useMutation({
    mutationKey: ["identity-information-post"],
    mutationFn: async (payload) => await fileIdentityRequest(payload),
  });
};
