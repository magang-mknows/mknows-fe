import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TQuizDescResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { quizDescGetRequest } from "./api";

export const useGetQuizDescById = (
  id: string | number,
): UseQueryResult<TQuizDescResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["quiz-description-get", id],
    queryFn: async () => await quizDescGetRequest(id),
  });
