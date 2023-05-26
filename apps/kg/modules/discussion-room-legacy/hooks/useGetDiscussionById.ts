import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TDiscussionResponse } from "../component/types";

export const useGetDiscussionById = (id: string): UseQueryResult<TDiscussionResponse> =>
  useQuery<TDiscussionResponse>({
    queryKey: ["get-detail-discussion", id],
    // queryFn: async () => await GetDiscussion(id),
  });
