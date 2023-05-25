import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TQuizHistoryResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { quizHistoryGetRequest } from './api';

export const useGetQuizHistoryById = (
  id: string | number
): UseQueryResult<TQuizHistoryResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['quiz-history-get', id],
    queryFn: async () => await quizHistoryGetRequest(id),
  });
