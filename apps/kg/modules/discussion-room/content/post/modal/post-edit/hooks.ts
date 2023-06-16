import { UseMutationResult, useMutation, UseQueryResult, useQuery } from "@tanstack/react-query";
import { UpdateDiscussion, DiscussionByIdRequest } from "./api";
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

export const useUpdateDiscussion = (
  id: string,
): UseMutationResult<
  TDiscussionDetailResponse,
  TMetaErrorResponse,
  TDiscussionPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ["update-discussion", id],
    mutationFn: async (payload) => await UpdateDiscussion(id, payload),
  });
};
