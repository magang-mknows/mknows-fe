import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";
import { TCommentResponse, TDiscussionPayload, TDiscussionResponse } from "./types";
import {
  CommentCreateByIdRequest,
  getDisscussionDetailRequest,
  getDisscussionRequest,
  ReplyCreateByIdRequest,
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

export const useCreateCommentById = (
  id: string,
): UseMutationResult<TCommentResponse, TMetaErrorResponse, TDiscussionPayload, unknown> => {
  return useMutation({
    mutationKey: ["create-comment-by-id", id],
    mutationFn: async (payload) => await CommentCreateByIdRequest(id, payload),
  });
};

export const useCreateReplyById = (
  id: string,
): UseMutationResult<TCommentResponse, TMetaErrorResponse, TDiscussionPayload, unknown> => {
  return useMutation({
    mutationKey: ["create-reply-by-id", id],
    mutationFn: async (payload) => await ReplyCreateByIdRequest(id, payload),
  });
};
