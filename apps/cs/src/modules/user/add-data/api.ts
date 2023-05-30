import api from "../../../services/api";
import { TIdentityFile, TIdentityResponse } from "./types";
import { serialize } from "object-to-formdata";

export const fileIdentityRequest = async (payload: TIdentityFile): Promise<TIdentityResponse> => {
  const { data } = await api.post("/user/identity-scoring", serialize(payload));
  return data;
};