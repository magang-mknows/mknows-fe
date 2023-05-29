import { UseMutationResult, useMutation, UseQueryResult, useQuery } from "@tanstack/react-query";
import { CreateDiscussion, profileRequest } from "./api";
import { TDiscussionPayload, TDiscussionDetailResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { useSession } from "next-auth/react";

export const useProfile = (): UseQueryResult<TDiscussionDetailResponse, TMetaErrorResponse> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ["get-user-me"],
    queryFn: async () => await profileRequest(),
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
