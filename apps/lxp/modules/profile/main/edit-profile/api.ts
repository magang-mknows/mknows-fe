import api from "../../../../services/api";
import {
  TUserProfilePayload,
  TUserProfileResponse,
  TUpdateUserResponse,
  IUpdateUserPayload,
} from "./types";

import { serialize } from "object-to-formdata";

export const updateUserProfile = async (
  payload: TUserProfilePayload,
): Promise<TUserProfileResponse> => {
  const { data } = await api.put("/users/avatar", serialize(payload));
  return data;
};

export const updateUserData = async (payload: IUpdateUserPayload): Promise<TUpdateUserResponse> => {
  const { data } = await api.put("/users/me", payload);
  return data;
};
