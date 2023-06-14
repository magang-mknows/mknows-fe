import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TModuleResumeResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { moduleResumeSubmitRequest } from "./api";

export const useSubmitModuleResumeById = (
  id: string,
): UseMutationResult<TModuleResumeResponse, TMetaErrorResponse, string, unknown> =>
  useMutation({
    mutationKey: ["submit-module-resume"],
    mutationFn: async (payload) => await moduleResumeSubmitRequest(id, payload),
  });
