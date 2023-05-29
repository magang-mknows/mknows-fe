import api from "../../../services/api";
import {
  TLoginResponse,
  TLoginPayload,
  TLoginByGooglePayload,
  TLoginByGoogleResponse,
} from "./types";

export const loginRequest = async (payload?: TLoginPayload): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>("/auth/login", payload);
  return data;
};

export const loginByGoogleRequest = async (
  payload: TLoginByGooglePayload,
): Promise<TLoginByGoogleResponse> => {
  const { data } = await api.post<TLoginByGoogleResponse>("/auth/login/google/callback", payload);
  return data;
};
