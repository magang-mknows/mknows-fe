import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getMyWorkCourse } from "./api";
import { TMyTrainingModuleResponse } from "../mytraining-module/type";
import { params } from "./type";

export const useGetMyWorkCourse = (
  params: params,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", params],
    queryFn: async () => await getMyWorkCourse(params),
  });
