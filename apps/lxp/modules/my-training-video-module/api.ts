import api from "../../services/api";
import { paramsVideoModule } from "./type";
export const getMyWorkVideoModule = async (params: paramsVideoModule) => {
  const { data } = await api.get(
    `/my-works/session/${params.subjectID}/module/${params.moduleID}/batch/${params.videoID}/resume`,
  );
  return data;
};
