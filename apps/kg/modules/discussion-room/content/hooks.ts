import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TCommentResponse, TDiscussionResponse } from "./types";
import { CommentGetByIdRequest, getDisscussionRequest } from "./api";

export const useGetAllDiscussion = (limit: string): UseQueryResult<TDiscussionResponse> =>
  useQuery({
    queryKey: ["get-all-discussion"],
    queryFn: async () => await getDisscussionRequest(limit),
  });

export const useGetCommentById = (id: string): UseQueryResult<TCommentResponse> =>
  useQuery({
    queryKey: ["comment-get-by-id", id],
    queryFn: async () => await CommentGetByIdRequest(id),
  });
