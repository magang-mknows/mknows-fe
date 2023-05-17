import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TUserDataResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { getUserData } from './api';

export const useGetUserData = (): UseQueryResult<
  TUserDataResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['get-user-data'],
    queryFn: async () => await getUserData(),
  });
