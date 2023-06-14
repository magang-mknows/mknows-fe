import api from "../../../services/api";
import { TContractResponse } from "./types";

export const contractGetByIdRequest = async (id: string | number): Promise<TContractResponse> => {
  const { data } = await api.get(`/student-subject/major/${id}/contracts`);
  return data;
};
