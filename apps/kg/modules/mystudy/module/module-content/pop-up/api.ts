import api from "../../../../../services/api";
import { TModuleResumePayload, TModuleResumeResponse } from "./types";

export const moduleResumeSubmitRequest = async (
  id: string,
  payload: string,
): Promise<TModuleResumeResponse> => {
  const { data } = await api.post(`/studi-ku/module/${id}/resume`, payload);
  return data;
};
