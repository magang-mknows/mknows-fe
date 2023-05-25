import api from '../../../../services/api';
import { TQuizHistoryResponse } from './types';

export const quizHistoryGetRequest = async (
  id: string | number
): Promise<TQuizHistoryResponse> => {
  const { data } = await api.get(`/studi-ku/quiz/history/${id}`);
  return data;
};
