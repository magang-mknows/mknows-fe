import api from "../../../services/api";
import { TAssignmentResponse } from "./type";

export const assignmentGetRequest = async (id: string | number): Promise<TAssignmentResponse> => {
  const { data } = await api.get(`/studi-ku/assignment/session/${id}`);
  return data;
};
