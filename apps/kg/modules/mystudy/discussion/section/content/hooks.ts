import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TDiscussionResponse } from "./types";
import { getDisscussionReq, getDisscussionRequest, getDisscussionRequestById } from "./api";

export const useGetAllDiscuss = (): UseQueryResult<TDiscussionResponse> =>
  useQuery({
    queryKey: ["get-all-discussion"],
    queryFn: async () => await getDisscussionReq(),
  });

export const useGetAllDiscussion = (id: string): UseQueryResult<TDiscussionResponse> =>
  useQuery({
    queryKey: ["get-all-discussion-session"],
    queryFn: async () => await getDisscussionRequest(id),
  });

export const useGetAllDiscussionBySessionId = (id: string): UseQueryResult<TDiscussionResponse> =>
  useQuery({
    queryKey: ["get-all-discussion-by-session", id],
    queryFn: async () => await getDisscussionRequestById(id),
  });
