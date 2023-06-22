import { TReportCustResponse, TReportRequestResponse } from "./types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getDataReportCust, getDataReportRequest } from "./api";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

export const useReportCust = (): UseQueryResult<TReportCustResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["get-report-cust"],
    queryFn: async () => await getDataReportCust(),
  });
};

export const useReportRequest = (): UseQueryResult<TReportRequestResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["get-report-requst"],
    queryFn: async () => await getDataReportRequest(),
  });
};
