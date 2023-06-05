import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMyTrainingModuleResponse, params } from "../mytraining-module/type";
import { getMyWorkQuizId, getMyWorkTakeQuiz } from "./api";

export const useGetMyWorkQuizId = (
  params: params,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", params],
    queryFn: async () => await getMyWorkQuizId(params),
  });

export const useGetMyWorkTakeQuiz = (
  params: params,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", params],
    queryFn: async () => await getMyWorkTakeQuiz(params),
  });