import api from "../../services/api";
import { TFacultyResponse } from "./choice-faculty/types";

export const mystudyRequest = async (): Promise<TFacultyResponse> => {
  const { data } = await api.get("/faculty");
  return data;
};
