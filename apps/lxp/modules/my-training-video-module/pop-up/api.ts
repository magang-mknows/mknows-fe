import api from "../../../services/api";
import { TAdministrationResponse } from "../../administrations";
import { TModuleResumeResponse,  paramsPostModule } from "./types";

export const moduleResumeSubmitRequest = async (
  params : paramsPostModule,
  payload: TAdministrationResponse,
): Promise<TModuleResumeResponse> => {
  const { data } = await api.post(`/my-works/module/${params.moduleID}/bacth/${params.batchID}/resume`, payload);
  return data;
};
