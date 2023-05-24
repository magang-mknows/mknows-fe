import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { TEventResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { eventRegisteredGetRequest } from './api';

export const useGetEventRegistered = (): UseQueryResult<
  TEventResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['event-get'],
    queryFn: async () => await eventRegisteredGetRequest(),
  });
