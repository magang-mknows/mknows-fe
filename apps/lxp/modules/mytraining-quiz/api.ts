import api from "../../services/api";
import { TModulParams } from "../mytraining-module/type";

export const getMyWorkQuizId = async (params: TModulParams) => {
  const { data } = await api.get(
    `/my-works/quiz/session/${params.subjectID}/batch/${params.batchID}`,
  );
  return data;
};
