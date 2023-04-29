import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { profileRequest } from './api';
import { TUserDetailResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';

export const useProfile = (): UseQueryResult<
  TUserDetailResponse,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ['get-user-me'],
    queryFn: async () => await profileRequest(),
  });
};
