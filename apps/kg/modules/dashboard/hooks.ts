import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { TDashboardResponse, TuseDashboardData } from "./types";
import { dashboardGetRequest } from "./api";
import { useRecoilState } from "recoil";
import { dashboardDataState } from "./store";

export const useDashboardData = (): TuseDashboardData => {
  const [get, set] = useRecoilState(dashboardDataState);
  return {
    getDashboardData: get,
    setDashboardData: (val) => set(val),
  };
};

export const useGetDashboard = (): UseQueryResult<TDashboardResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["dashboard-get-all"],
    queryFn: async () => await dashboardGetRequest(),
  });
