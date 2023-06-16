import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TModuleResumePayload, TModuleResumeResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { moduleResumeSubmitRequest } from "./api";

export const useSubmitModuleResumeById = (): UseMutationResult<
  TModuleResumeResponse,
  TMetaErrorResponse,
  TModuleResumePayload,
  unknown
> =>
  useMutation({
    mutationKey: ["submit-module-resume"],
    mutationFn: async (payload) => await moduleResumeSubmitRequest(payload),
  });
