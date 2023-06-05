import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMyTrainingModuleResponse, TQuizParams } from "../mytraining-module/type";
import { getMyWorkQuizId } from "./api";

export const useGetMyWorkQuizId = (
  params: TQuizParams,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", params],
    queryFn: async () => await getMyWorkQuizId(params),
  });
