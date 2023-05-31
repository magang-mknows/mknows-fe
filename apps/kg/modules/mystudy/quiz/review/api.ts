import api from '../../../../services/api';
import { TQuizReviewResponse } from './types';

export const quizReviewGetRequest = async (
  id: string | number
): Promise<TQuizReviewResponse> => {
  const { data } = await api.get(`/studi-ku/quiz/review/${id}`);
  return data;
};
