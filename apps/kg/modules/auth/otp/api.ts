import { TMetaItem } from "@mknows-frontend-services/utils";
import api from "../../../services/api";
import { TOTPPayload, TOTPRequestPayload } from "./types";

export const otpVerify = async (paylaod: TOTPPayload): Promise<TMetaItem> => {
  const { data } = await api.post("/email-verification/verify/", paylaod);
  return data;
};

export const otpRequest = async (payload: TOTPRequestPayload): Promise<TMetaItem> => {
  const { data } = await api.post("/email-verification/request/", payload);
  return data;
};
