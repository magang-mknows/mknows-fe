import api from "../../../services/api";
import {
  TIdentityFile,
  TIdentityResponse,
  TCapabilityFile,
  TCapabilityResponse,
  TCharacterFile,
  TCharacterResponse,
} from "./types";
import { serialize } from "object-to-formdata";

export const fileIdentityRequest = async (payload: TIdentityFile): Promise<TIdentityResponse> => {
  const { data } = await api({
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: `/user/identity-scoring/${payload.user_id}`,
    data: serialize(payload),
  });
  return data;
};

export const fileCapabilityRequest = async (
  payload: TCapabilityFile,
): Promise<TCapabilityResponse> => {
  const { data } = await api({
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: `/user/capability-scoring/${payload.user_id}`,
    data: serialize(payload),
  });
  return data;
};

export const fileCharacterRequest = async (
  payload: TCharacterFile,
): Promise<TCharacterResponse> => {
  const { data } = await api({
    method: "PUT",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: `/user/character-scoring/${payload.user_id}`,
    data: serialize(payload),
  });
  return data;
};
