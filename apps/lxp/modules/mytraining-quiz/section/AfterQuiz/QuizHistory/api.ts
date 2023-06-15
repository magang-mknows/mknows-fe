import api from "../../../../../services/api";
import { TQuizHistoryParams, TQuizHistoryResponse } from "./types";

export const getQuizHistory = async (params: TQuizHistoryParams): Promise<TQuizHistoryResponse> => {
  const { data } = await api.get(`/my-works/quiz/${params.quizId}/batch/${params.batchId}/history`);
  return data;
};
