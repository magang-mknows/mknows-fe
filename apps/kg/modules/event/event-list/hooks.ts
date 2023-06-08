import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { TEventResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { eventGetRequest } from './api';

export const useGetEvent = (): UseQueryResult<
  TEventResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['event-get'],
    queryFn: async () => await eventGetRequest(),
  });
