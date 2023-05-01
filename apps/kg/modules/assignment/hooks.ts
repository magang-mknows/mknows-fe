import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { myAssigmentGetRequest } from './api';
import { TMyAssignmentResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { useSession } from 'next-auth/react';

export const useGetAssigment = (): UseQueryResult<
  TMyAssignmentResponse,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['get-user-me'],
    queryFn: async () => await myAssigmentGetRequest(),
  });
};
