import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { profileRequest } from './api';
import { TUserDetailResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { useSession } from 'next-auth/react';

export const useProfile = (): UseQueryResult<
  TUserDetailResponse,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  return useQuery({
    queryKey: ['get-user-me'],
    queryFn: async () => await profileRequest(),
    enabled: !!session,
  });
};
