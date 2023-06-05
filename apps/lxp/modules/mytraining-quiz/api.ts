import api from "../../services/api";
import { params } from "../mytraining-module/type";

export const getMyWorkQuizId = async (params: params) => {
  const { data } = await api.get(
    `/my-works/quiz/session/${params.subjectID}/batch/${params.batchID}`,
  );
  return data;
};
