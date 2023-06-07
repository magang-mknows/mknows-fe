import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getMyWorkQuizId } from "./api";
import { TQuizBySessionParams, TQuizBySessionResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

export const useGetMyWorkQuizId = (
  params: TQuizBySessionParams,
): UseQueryResult<TQuizBySessionResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-quiz-by-session-id", params],
    queryFn: async () => await getMyWorkQuizId(params),
  });
