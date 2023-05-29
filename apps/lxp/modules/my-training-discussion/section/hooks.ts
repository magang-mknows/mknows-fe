import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";
import { TCommentResponse, TDiscussionPayload, TDiscussionResponse } from "./types";
import {
  CommentCreateByIdRequest,
  CommentGetByIdRequest,
  getDisscussionDetailRequest,
  getDisscussionRequest,
} from "./api";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

export const useGetAllDiscussion = (): UseQueryResult<TDiscussionResponse> =>
  useQuery({
    queryKey: ["get-all-discussion"],
    queryFn: async () => await getDisscussionRequest(),
  });

export const useGetDetailDiscussionById = (id: string): UseQueryResult<TCommentResponse> =>
  useQuery({
    queryKey: ["discussion-get-by-id", id],
    queryFn: async () => await getDisscussionDetailRequest(id),
  });

export const useGetCommentById = (id: string): UseQueryResult<TCommentResponse> =>
  useQuery({
    queryKey: ["comment-get-by-id", id],
    queryFn: async () => await CommentGetByIdRequest(id),
  });

export const useCreateCommentById = (
  id: string,
): UseMutationResult<TCommentResponse, TMetaErrorResponse, TDiscussionPayload, unknown> => {
  return useMutation({
    mutationKey: ["create-comment-by-id", id],
    mutationFn: async (payload) => await CommentCreateByIdRequest(id, payload),
  });
};
