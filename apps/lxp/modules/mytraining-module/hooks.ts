import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getMyWorkModule } from "./api";
import { TModulParams, TMyTrainingModuleResponse } from "./type";

export const useGetMyWorkModule = (
  params: TModulParams,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", params],
    queryFn: async () => await getMyWorkModule(params),
  });
