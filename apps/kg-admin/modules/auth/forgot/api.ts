import { TMetaItem } from "@mknows-frontend-services/utils";
import api from "../../../services/api";
import { TForgotPasswordPayload } from "./types";

export const forgotPasswordRequest = async (
  payload: TForgotPasswordPayload,
): Promise<TMetaItem> => {
  const { data } = await api.post<TMetaItem>("/reset-password/request", payload);
  return data;
};
