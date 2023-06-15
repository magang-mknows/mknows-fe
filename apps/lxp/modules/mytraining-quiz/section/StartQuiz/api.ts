import api from "../../../../services/api";
import { TGetQuizParams, TQuestionsAnswer, TQuizQuestionResponse } from "./types";

export const getQuizQuestion = async (params: TGetQuizParams): Promise<TQuizQuestionResponse> => {
  const { data } = await api.get(`/my-works/quiz/${params.quizId}/batch/${params.batchId}/take`);
  return data;
};

export const submitQuizAnswer = async (params: TGetQuizParams, payload: TQuestionsAnswer) => {
  const { data } = await api.post(
    `/my-works/quiz/${params.quizId}/batch/${params.batchId}/submit`,
    payload,
  );
  return data;
};
