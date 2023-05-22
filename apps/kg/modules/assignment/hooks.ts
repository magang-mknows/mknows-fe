import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { asigmentGetRequest } from './api';
import { TMyAssignmentResponse } from './types';

export const useGetAssignment = (): UseQueryResult<TMyAssignmentResponse> =>
  useQuery({
    queryKey: ['get-assignment-user'],
    queryFn: async () => await asigmentGetRequest(),
  });
