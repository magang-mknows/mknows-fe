import api from "../../services/api";
import { TUserDetailResponse } from "./types";

export const profileRequest = async (): Promise<TUserDetailResponse> => {
  const { data } = await api.get("/user-profiles/me");
  return data;
};
