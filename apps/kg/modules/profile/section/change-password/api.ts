import api from "../../../../services/api";
import { TPasswordPayload, TPasswordResponse } from "./types";

export const UpdatePassword = async (payload: TPasswordPayload): Promise<TPasswordResponse> => {
  const { data } = await api.put("/auth/change-password", payload);
  return data;
};
