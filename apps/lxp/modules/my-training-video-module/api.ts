import api from "../../services/api";
import { params } from "./type";
export const getMyWorkVideoModule = async (params: params) => {
  const { data } = await api.get(
    `/my-works/session/${params.subjectID}/module/${params.moduleID}/batch/${params.videoID}/resume`,
  );
  return data;
};
