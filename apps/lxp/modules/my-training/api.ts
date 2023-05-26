import api from "../../services/api";
import { TDepartmentResponse } from "./type";

export const getDepartmentRequest = async (): Promise<TDepartmentResponse> => {
  const { data } = await api.get("/my-works/me");
  return data;
};
