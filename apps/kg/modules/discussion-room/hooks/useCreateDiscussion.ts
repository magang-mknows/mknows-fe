import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TDiscussionPayload, TDiscussionSingleResponse } from '../types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
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
