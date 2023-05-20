import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TProfileResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { getProfileMe } from './api';

export const useProfile = (): UseQueryResult<
  TProfileResponse,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ['get-profile'],
    queryFn: async () => await getProfileMe(),
  });
};
