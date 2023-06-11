import api from "../../../../services/api";
import { TQuizSubmitPayload, TQuizSubmitResponse, TQuizTakeResponse } from "./type";

export const quizTakeGetRequest = async (id: string | number): Promise<TQuizTakeResponse> => {
  const { data } = await api.get(`/studi-ku/quiz/take/${id}`);
  return data;
};

export const quizSubmitRequest = async (
  payload: TQuizSubmitPayload,
): Promise<TQuizSubmitResponse> => {
  const { data } = await api.post(`/studi-ku/quiz/result/${payload.id}`, payload.req);
  return data;
};
