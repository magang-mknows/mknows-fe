import api from "../../services/api";
import { TModulParams } from "./type";

export const getMyWorkModule = async (params: TModulParams) => {
  const { data } = await api.get(
    `/my-works/module/session/${params.subjectID}/bacth/${params.batchID}`,
  );
  return data;
};
