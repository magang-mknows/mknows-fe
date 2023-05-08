import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { TDiscussionResponse } from '../component/types';
import { getDisscussionRequest } from '../api';

export const useGetAllDiscussion = (): UseQueryResult<TDiscussionResponse> =>
  useQuery({
    queryKey: ['get-all-discussion'],
    queryFn: async () => await getDisscussionRequest(),
  });
