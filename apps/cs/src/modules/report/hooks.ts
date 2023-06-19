import { useRecoilState, useRecoilValue } from "recoil";
import { reportFilter, reportSearch } from "./store";
import { TReportCustResponse, TReportDataResponse, TReportQueryResponse } from "./types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getDataReportCust } from "./api";

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

export const useReportCust = (): UseQueryResult<TReportCustResponse> => {
  return useQuery({
    queryKey: ["get-report-cust"],
    queryFn: async () => await getDataReportCust(),
  });
};
