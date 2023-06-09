import api from "../../services/api";
import { TVideoModule, TVideoModuleResponse,  TVideoModuleParams } from "./type";
export const getMyWorkVideoModule = async (params:  TVideoModuleParams) => {
  const { data } = await api.get(
    `/my-works/session/${params.subjectID}/module/${params.moduleID}/batch/${params.videoID}/resume`,
  );
  return data;
};
export const postWatchVideo = async (params:  TVideoModuleParams )  => {
  const { data } = await api.post(
    `/watched-video-progress/video/${params.videoID}/taken` );
  return data;
};

