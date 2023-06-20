import api from "../../../../services/api";
import { IUpdateUserPayload, TUpdateUserResponse } from "./types";

import { serialize } from "object-to-formdata";

export const updateUserData = async (payload: IUpdateUserPayload): Promise<TUpdateUserResponse> => {
  const { data } = await api.put("/user-profiles/me", serialize(payload));
  return data;
};
