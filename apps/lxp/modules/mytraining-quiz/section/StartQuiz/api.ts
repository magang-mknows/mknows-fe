import api from "../../../../services/api";
import { TGetQuizPayload, TQuizQuestionResponse } from "./types";

export const getQuizQuestion = async (payload: TGetQuizPayload): Promise<TQuizQuestionResponse> => {
  const { data } = await api.get(`/my-works/quiz/${payload.quizId}/batch/${payload.quizId}/take`);
  return data;
};
