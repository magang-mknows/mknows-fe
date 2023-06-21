import { TQuotaParams, TQuotaResponse, TRequestQuota, TRequestQuotaResponse } from "./types";
import { serialize } from "object-to-formdata";
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

export const quotaRequest = async (payload: TRequestQuota): Promise<TRequestQuotaResponse> => {
  const { data } = await api({
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: `/quotas/request`,
    data: serialize(payload),
  });
  return data;
};
