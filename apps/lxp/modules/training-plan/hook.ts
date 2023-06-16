import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TCheckWorkPlanStatusResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { checkWorkPlanStatus } from "./api";

export const useCheckWorkPlanStatus = (): UseQueryResult<
  TCheckWorkPlanStatusResponse,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ["check-work-plan-status"],
    queryFn: async () => {
      return await checkWorkPlanStatus();
    },
  });
};
