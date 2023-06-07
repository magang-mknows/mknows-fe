import api from "../../../services/api";
import { TModulParams } from "../../mytraining-module/type";
import { TQuizBySessionResponse } from "./types";

export const getMyWorkQuizId = async (params: TModulParams): Promise<TQuizBySessionResponse> => {
  const { data } = await api.get(
    `/my-works/quiz/session/${params.subjectID}/batch/${params.batchID}`,
  );
  return data;
};
