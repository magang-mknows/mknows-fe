import { UseMutationResult, useMutation, UseQueryResult, useQuery } from "@tanstack/react-query";
import { CreateDiscussion, DiscussionByIdRequest } from "./api";
import { TDiscussionPayload, TDiscussionDetailResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

export const useDiscussionById = (
  id: string,
): UseQueryResult<TDiscussionDetailResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["get-discussion-by-id", id],
    queryFn: async () => await DiscussionByIdRequest(id),
  });
};

export const useCreateDiscussion = (): UseMutationResult<
  TDiscussionDetailResponse,
  TMetaErrorResponse,
  TDiscussionPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ["create-discussion"],
    mutationFn: async (payload) => await CreateDiscussion(payload),
  });
};
