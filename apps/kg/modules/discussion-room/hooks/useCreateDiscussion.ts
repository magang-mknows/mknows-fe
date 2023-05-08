import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';

import {
  TDiscussionPayload,
  TDiscussionSingleResponse,
} from '../component/types';
import { createDisscussionRequest } from '../api';

export const useCreateDiscussion = (): UseMutationResult<
  TDiscussionSingleResponse,
  TMetaErrorResponse,
  TDiscussionPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['create-disscussion'],
    mutationFn: async (payload) => await createDisscussionRequest(payload),
  });
