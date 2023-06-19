import api from "../../../../../services/api";
import { TModuleResumePayload, TModuleResumeResponse } from "./types";

export const moduleResumeSubmitRequest = async (
  payload: TModuleResumePayload,
): Promise<TModuleResumeResponse> => {
  const { data } = await api.post(
    `/studi-ku/module/${payload.id}/resume`,
    JSON.stringify(payload.req),
  );
  return data;
};
