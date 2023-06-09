import api from "../../../../services/api";
import { IQuizAnswerPayload, TGetQuizParams, TQuizQuestionResponse } from "./types";

export const getQuizQuestion = async (params: TGetQuizParams): Promise<TQuizQuestionResponse> => {
  const { data } = await api.get(`/my-works/quiz/${params.quizId}/batch/${params.quizId}/take`);
  return data;
};

export const submitQuizAnswer = async (params: TGetQuizParams, payload: IQuizAnswerPayload) => {
  const { data } = await api.post(
    `/my-works/quiz/${params.quizId}/batch/${params.batchId}/submit`,
    payload,
  );
  return data;
};
