import api from "../../services/api";
import { TReportCustitems } from "./types";

// report customer
export const getDataReportCust = async (): Promise<TReportCustitems> => {
  const { data } = await api.get("/report/customer-report");
  return data;
};
