import api from "../../services/api";
import { TDashboardResponse } from "./types";

export const getDashboard = async (): Promise<TDashboardResponse> => {
  const { data } = await api.get<TDashboardResponse>("/dashboards");
  return data;
};
