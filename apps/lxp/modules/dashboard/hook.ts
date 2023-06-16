import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TDashboardResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { getDashboard } from "./api";

export const useDashboard = (): UseQueryResult<TDashboardResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["dashboard"],
    queryFn: async () => await getDashboard(),
  });
