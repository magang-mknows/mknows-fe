import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMyTrainingModuleResponse } from "../mytraining-module/type";
import { getMyWorkQuizId, getMyWorkTakeQuiz } from "./api";

export const useGetMyWorkQuizId = (
  subjectID: string,
  batchID: string,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", subjectID, batchID],
    queryFn: async () => await getMyWorkQuizId(subjectID, batchID),
  });

export const useGetMyWorkTakeQuiz = (
  subjectID: string,
  batchID: string,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", subjectID, batchID],
    queryFn: async () => await getMyWorkTakeQuiz(subjectID, batchID),
  });
