import { TMetaItem } from "@mknows-frontend-services/utils";
import api from "../../../services/api";
import { TResetPasswordPayload } from "./types";

export const resetPasswordRequest = async (payload: TResetPasswordPayload): Promise<TMetaItem> => {
  const { data } = await api.post("/auth/reset-password", payload);
  return data;
};
