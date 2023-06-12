import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TQuizHistoryParams, TQuizHistoryResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { useRouter } from "next/router";
import { getQuizHistory } from "./api";

export const useGetQuizHistory = (
  params: TQuizHistoryParams,
): UseQueryResult<TQuizHistoryResponse, TMetaErrorResponse> => {
  const { isReady } = useRouter();

  return useQuery({
    queryKey: ["get-quiz-history-lxp", params],
    queryFn: async () => (isReady ? await getQuizHistory(params) : null),
  });
};
