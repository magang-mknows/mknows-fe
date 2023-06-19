import api from "../../services/api";
import { TCertificateResponse } from "./type";

export const certificateGetRequest = async (): Promise<TCertificateResponse> => {
  const { data } = await api.get(`/certificate`);
  return data;
};
