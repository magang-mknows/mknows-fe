import api from "../../services/api";
import { TCheckWorkPlanStatusResponse } from "./types";

export const checkWorkPlanStatus = async (): Promise<TCheckWorkPlanStatusResponse> => {
  const { data } = await api.get("/work-plans/is-taken-department");
  console.log("status", data.status);
  return data;
};
