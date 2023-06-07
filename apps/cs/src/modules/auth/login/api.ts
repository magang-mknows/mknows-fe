import { TLoginPayload, TLoginResponse } from "./types";
import api from "../../../services/api";

export const loginRequest = async (payload: TLoginPayload): Promise<TLoginResponse> => {
  const { data } = await api.post("/auth/signin", payload);
  return data;
};
