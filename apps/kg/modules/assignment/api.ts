import api from "../../services/api";
import { TAssignmentUser } from "./types";

export const asigmentGetRequest = async (): Promise<TAssignmentUser> => {
  const { data } = await api.get("/studi-ku/assignment/progress");
  return data;
};
