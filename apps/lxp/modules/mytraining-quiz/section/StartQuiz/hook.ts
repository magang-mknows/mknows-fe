import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TGetQuizPayload, TQuizQuestionResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { getQuizQuestion } from "./api";

export const useGetQuizQuestion = (
  payload: TGetQuizPayload,
): UseQueryResult<TQuizQuestionResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["quiz-questions-lxp", payload.batchId, payload.quizId],
    queryFn: async () => await getQuizQuestion(payload),
  });
