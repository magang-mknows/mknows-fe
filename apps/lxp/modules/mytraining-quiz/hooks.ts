import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMyTrainingModuleResponse, TQuizParams } from "../mytraining-module/type";
import { getMyWorkQuizId } from "./api";

export const useGetMyWorkQuizId = (
  payload: TQuizParams,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", payload],
    queryFn: async () => await getMyWorkQuizId(payload),
  });
