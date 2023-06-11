import { TQuizScoreResponse } from "./types";
import api from "../../../../services/api";

export const quizScoreGetRequest = async (id: string | number): Promise<TQuizScoreResponse> => {
  const { data } = await api.get(`/studi-ku/quiz/result/${id}`);
  return data;
};
