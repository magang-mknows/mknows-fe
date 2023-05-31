import api from "../../services/api";
export const getMyWorkModule = async (batchID: string, sessionID: string) => {
  const { data } = await api.get(`/my-works/module/session/${sessionID}/bacth/${batchID}`);
  return data;
};
