import { useRecoilState } from "recoil";
import { TReportCustResponse, TReportQueryResponse, TReportRequestResponse } from "./types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { reportSearch } from "./store";
import { getDataReportCust, getDataReportRequest } from "./api";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

export const useReportQuery = (): TReportQueryResponse => {
  const [get, set] = useRecoilState(reportSearch);
  return {
    getReportQuery: get,
    setReportQuery: (val: string) => set(val),
  };
};

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
