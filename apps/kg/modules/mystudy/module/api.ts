import api from "../../../services/api";
import { TModuleResponse } from "./type";

export const moduleGetRequest = async (id: string | number): Promise<TModuleResponse> => {
  const { data } = await api.get(`/studi-ku/module/session/${id}`);
  return data;
};
