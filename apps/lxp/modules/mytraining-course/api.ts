import api from "../../services/api";
import { params } from "./type";
export const getMyWorkCourse = async (params: params) => {
  const { data } = await api.get(
    `/my-works/me/subject/${params.subjectID}/last-session/${params.lastSession}/batch/${params.batchID}`,
  );
  return data;
};
