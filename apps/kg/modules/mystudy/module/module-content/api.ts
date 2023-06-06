import api from "../../../../services/api";
import { TModuleContentResponse, TWatchedVideoProgressReponse } from "./types";

export const moduleContentGetRequest = async (
  id: string | number,
): Promise<TModuleContentResponse> => {
  const { data } = await api.get(`/studi-ku/module/${id}`);
  return data;
};

export const watchedVideoProgressRequest = async (
  id: string,
): Promise<TWatchedVideoProgressReponse> => {
  const { data } = await api.post(`/watched-video-progress/video/${id}/taken`);
  return data;
};
