import api from "../../services/api";
import { TSimulationHistoryResponse, TSimulationResponse } from "./type";

export const SimulationService = async (): Promise<TSimulationResponse> => {
  const { data } = await api.get("/meeting");
  return data;
};

export const HistoryService = async (): Promise<TSimulationHistoryResponse> => {
  const { data } = await api.get("/meeting/student/history");
  return data;
};
