import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { TEventResponse } from './types';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { eventGetByIdRequest } from '../api';

export const useGetEventById = (
  id: number | string
): UseQueryResult<TEventResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['event-get-by-id', id],
    queryFn: async () => await eventGetByIdRequest(id),
  });
