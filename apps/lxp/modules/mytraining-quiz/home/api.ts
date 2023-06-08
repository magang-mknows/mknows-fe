import api from "../../../services/api";
import { TQuizBySessionParams, TQuizBySessionResponse } from "./types";

export const getQuizBySessionId = async (
  params: TQuizBySessionParams,
): Promise<TQuizBySessionResponse> => {
  const { data } = await api.get(
    `/my-works/quiz/session/${params.subjectID}/batch/${params.batchID}`,
  );
  return data;
};
