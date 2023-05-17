import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { asigmentGetRequest } from './api';
import { TMyAssignmentResponse } from './types';

export const useGetAssignment = (
  session_id: string
): UseQueryResult<TMyAssignmentResponse> =>
  useQuery({
    queryKey: ['get-assignment-by-sessionId', session_id],
    queryFn: async () => await asigmentGetRequest(session_id),
  });
