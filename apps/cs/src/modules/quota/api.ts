import { TQuotaParams, TQuotaResponse } from "./types";
import api from "../../services/api";

export const getQuotaResponse = async (params: TQuotaParams): Promise<TQuotaResponse> => {
  const { data } = await api({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/quotas/request",
    params,
  });
  return data;
};
