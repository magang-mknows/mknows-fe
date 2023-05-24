import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { TEventResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { eventHistoryGetRequest } from './api';

export const useGetEventHistory = (): UseQueryResult<
  TEventResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['event-get-history'],
    queryFn: async () => await eventHistoryGetRequest(),
  });
