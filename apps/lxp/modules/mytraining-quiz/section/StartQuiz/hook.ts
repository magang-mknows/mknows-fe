import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import {
  ISubmitQuizVariable,
  TGetQuizParams,
  TQuizQuestionResponse,
  TSubmitQuizResponse,
} from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { getQuizQuestion, submitQuizAnswer } from "./api";
import { useRouter } from "next/router";

export const useGetQuizQuestion = (
  params: TGetQuizParams,
): UseQueryResult<TQuizQuestionResponse, TMetaErrorResponse> => {
  const { isReady } = useRouter();

  return useQuery({
    queryKey: ["quiz-questions-lxp", params],
    // avoid fetch api with "undifined" params
    queryFn: async () => (isReady ? await getQuizQuestion(params) : null),
  });
};

export const useSubmitQuizAnswer = (): UseMutationResult<
  TSubmitQuizResponse,
  TMetaErrorResponse,
  ISubmitQuizVariable,
  unknown
> => {
  return useMutation({
    mutationKey: ["submit-quiz-lxp"],
    mutationFn: async (variable: ISubmitQuizVariable) =>
      await submitQuizAnswer(variable.quizParams, variable.quizAnswer),
  });
};
