import api from '../../../../services/api';
import { TQuizTakeResponse } from './type';

export const quizTakeGetRequest = async (
  id: string | number
): Promise<TQuizTakeResponse> => {
  const { data } = await api.get(`/studi-ku/quiz/take/${id}`);
  return data;
};
