import api from "../../services/api";
import { TReportCustResponse, TReportRequestResponse } from "./types";

// report customer
export const getDataReportCust = async (): Promise<TReportCustResponse> => {
  const { data } = await api.get<TReportCustResponse>("/report/customer-report");
  return data;
};

export const getDataReportRequest = async (): Promise<TReportRequestResponse> => {
  const { data } = await api.get<TReportRequestResponse>("/report/request-report");
  return data;
};
