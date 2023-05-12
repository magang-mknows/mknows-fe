import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { TDiscussionResponse } from './types';
import { DiscussionGetByIdRequest, getDisscussionRequest } from './api';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';

export const useGetAllDiscussion = (): UseQueryResult<TDiscussionResponse> =>
  useQuery({
    queryKey: ['get-all-discussion'],
    queryFn: async () => await getDisscussionRequest(),
  });

export const useGetDiscussionById = (
  id: string
): UseQueryResult<TDiscussionResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['event-get-by-id', id],
    queryFn: async () => await DiscussionGetByIdRequest(id),
  });
