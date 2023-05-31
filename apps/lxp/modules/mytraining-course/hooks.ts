import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getMyWorkCourse } from "./api";
import { TMyTrainingModuleResponse } from "../mytraining-module/type";

export const useGetMyWorkCourse = (
  subjectID: string,
  lastSession: string,
  batchID: string,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", subjectID, lastSession, batchID],
    queryFn: async () => await getMyWorkCourse(subjectID, lastSession, batchID),
  });
