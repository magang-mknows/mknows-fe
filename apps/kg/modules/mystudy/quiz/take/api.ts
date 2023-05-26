import api from "../../../../services/api";
import { TQuizSubmitPayload, TQuizSubmitResponse, TQuizTakeResponse } from "./type";

export const quizTakeGetRequest = async (id: string | number): Promise<TQuizTakeResponse> => {
  const { data } = await api.get(`/studi-ku/quiz/take/${id}`);
  return data;
};

export const quizSubmitRequest = async (
  id: string,
  payload: TQuizSubmitPayload,
): Promise<TQuizSubmitResponse> => {
  const { data } = await api.post(`/studi-ku/quiz/submit/${id}`, payload);
  return data;
};
