import api from "../../services/api";
import { TDashboardResponse } from "./types";

export const dashboardGetRequest = async (): Promise<TDashboardResponse> => {
  const { data } = await api.get("/dashboard");
  return data;
};
