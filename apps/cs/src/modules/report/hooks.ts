import { useRecoilState, useRecoilValue } from "recoil";
import { reportFilter, reportSearch } from "./store";
import {
  TReportCustResponse,
  TReportDataResponse,
  TReportQueryResponse,
  TReportRequestResponse,
} from "./types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getDataReportCust, getDataReportRequest } from "./api";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

export const useReportData = (): TReportDataResponse => {
  const get = useRecoilValue(reportFilter);
  return {
    getReportData: get,
  };
};

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
