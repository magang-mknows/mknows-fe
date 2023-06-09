import api from "../../../../services/api";
import { TGetQuizParams, TQuizQuestionResponse } from "./types";

export const getQuizQuestion = async (payload: TGetQuizParams): Promise<TQuizQuestionResponse> => {
  const { data } = await api.get(`/my-works/quiz/${payload.quizId}/batch/${payload.quizId}/take`);
  return data;
};
