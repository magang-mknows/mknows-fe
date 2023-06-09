import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TGetQuizParams, TQuizQuestionResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { getQuizQuestion } from "./api";
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
