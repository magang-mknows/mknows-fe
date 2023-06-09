import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TDraftSubject, TRoot } from "./type";
import { draftRequest } from "./api";

export const useDraftSubject = (id: string ): UseMutationResult<
  TDraftSubject,
  TMetaErrorResponse,
  TRoot,
  unknown
> => {
  return useMutation({
    mutationKey: ["draft-krs-post",id],
    mutationFn: async (payload) => await draftRequest(id,payload),
  });
};