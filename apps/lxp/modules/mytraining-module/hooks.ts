import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getMyWorkModule } from "./api";
import { TMyTrainingModuleResponse, params } from "./type";

export const useGetMyWorkModule = (
  params: params,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", params],
    queryFn: async () => await getMyWorkModule(params),
  });
