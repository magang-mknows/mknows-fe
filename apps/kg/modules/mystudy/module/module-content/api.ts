import api from "../../../../services/api";
import { TModuleContentResponse } from "./types";

export const moduleContentGetRequest = async (
  id: string | number,
): Promise<TModuleContentResponse> => {
  const { data } = await api.get(`/studi-ku/module/${id}`);
  return data;
};
