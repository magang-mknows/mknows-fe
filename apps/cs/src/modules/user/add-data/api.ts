import api from "../../../services/api";
import { TIdentityFile, TIdentityResponse } from "./types";
import { serialize } from "object-to-formdata";

export const fileIdentityRequest = async (payload: TIdentityFile): Promise<TIdentityResponse> => {
  const { data } = await api({
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    url: "/user/identity-scoring",
    data: serialize(payload),
  });
  return data;
};
