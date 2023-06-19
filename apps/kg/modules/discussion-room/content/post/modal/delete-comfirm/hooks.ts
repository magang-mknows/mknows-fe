import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TDiscussionDetailResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { DiscussionDeleteById } from "./api";

export const useDeleteDiscussionById = (
  id: string,
): UseMutationResult<TDiscussionDetailResponse, TMetaErrorResponse, unknown, unknown> => {
  return useMutation({
    mutationKey: ["delete-discussion-by-id", id],
    mutationFn: async () => await DiscussionDeleteById(id),
  });
};
