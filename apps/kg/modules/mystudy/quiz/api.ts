import api from "../../../services/api";
import { TQuizDescResponse } from "./types";

export const quizDescGetRequest = async (id: string | number): Promise<TQuizDescResponse> => {
  const { data } = await api.get(`/studi-ku/quiz/description/${id}`);
  return data;
};
