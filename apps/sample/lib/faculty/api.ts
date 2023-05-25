import { serialize } from "object-to-formdata";
import { api } from "../../service/api";
import { TFacultyPayload, TFacultyResponse } from "./types";

export const facultyCreateRequest = async (payload: TFacultyPayload): Promise<TFacultyResponse> => {
  const { data } = await api({
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: serialize(payload),
    url: "/faculty",
  });
  return data;
};
