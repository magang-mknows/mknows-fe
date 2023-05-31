import api from "../../services/api";
export const getMyWorkCourse = async (subjectID: string, lastSession: string, batchID: string) => {
  const { data } = await api.get(
    `/my-works/me/subject/${subjectID}/last-session/${lastSession}/batch/${batchID}`,
  );
  return data;
};
