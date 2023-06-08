import { paramsVideoModule } from "../type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getMyWorkVideoModule } from "../api";
import { TMyTrainingModuleResponse } from "../../mytraining-module/type";


export const useGetMyWorkVideoModule = (
  params: paramsVideoModule,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", params],
    queryFn: async () => await getMyWorkVideoModule(params),
  });
