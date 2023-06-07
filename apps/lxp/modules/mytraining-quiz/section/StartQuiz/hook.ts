import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TGetQuizParams, TQuizQuestionResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { getQuizQuestion } from "./api";

export const useGetQuizQuestion = (
  params: TGetQuizParams,
): UseQueryResult<TQuizQuestionResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["quiz-questions-lxp", params],
    queryFn: async () => await getQuizQuestion(params),
  });
