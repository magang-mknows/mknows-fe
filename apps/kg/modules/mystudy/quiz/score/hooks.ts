import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TQuizScoreResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { quizScoreGetRequest } from './api';

export const useGetQuizScoreById = (
  id: string | number
): UseQueryResult<TQuizScoreResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['quiz-score-get', id],
    queryFn: async () => await quizScoreGetRequest(id),
  });
