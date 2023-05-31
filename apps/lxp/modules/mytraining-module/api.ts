import api from "../../services/api";
import { params } from "./type";
export const getMyWorkModule = async (params: params) => {
  const { data } = await api.get(
    `/my-works/module/session/${params.subjectID}/bacth/${params.batchID}`,
  );
  return data;
};
