import api from "../../services/api";
import { TRequestResponse } from "./types";

export const getDataRequest = async (): Promise<TRequestResponse> => {
  const { data } = await api.get("/features/all");
  return data;
};
