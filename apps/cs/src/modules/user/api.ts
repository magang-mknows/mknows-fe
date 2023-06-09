import api from "../../services/api";
import { TUserParams, TUserResponse } from "./types";

export const getUserResponse = async (params: TUserParams): Promise<TUserResponse> => {
  const { data } = await api({
    headers: {
      "Content-Type": "application/json",
    },
    url: "/user/filter",
    params,
  });
  return data;
};

export const deleteUserResponse = async (id: string): Promise<TUserResponse> => {
  const { data } = await api({
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    url: "/user/" + id,
  });
  return data;
};
