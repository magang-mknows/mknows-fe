import { useQuery, UseQueryResult } from "@tanstack/react-query";
import DiscussionService from "@/services/Discussion";
import { TDiscussionResponse } from "@/services/Discussion/types";

export const useGetDiscussionById = (id: string): UseQueryResult<TDiscussionResponse> =>
  useQuery<TDiscussionResponse>({
    queryKey: ["get-detail-discussion", id],
    queryFn: async () => await DiscussionService.GetDiscussion(id),
  });
