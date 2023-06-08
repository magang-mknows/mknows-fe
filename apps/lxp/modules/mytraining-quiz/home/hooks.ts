import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TQuizBySessionParams, TQuizBySessionResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { getQuizBySessionId } from "./api";

export const useGetQuizBySessionId = (
  params: TQuizBySessionParams,
): UseQueryResult<TQuizBySessionResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-quiz-by-session-id", params],
    queryFn: async () => await getQuizBySessionId(params),
  });
