import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TLoginPayload } from './types';
import { TMetaErrorResponse, TMetaItem } from '@mknows-frontend-services/utils';
import { loginRequest } from './api';

export const useLogin = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TLoginPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['key'],
    mutationFn: async (payload) => await loginRequest(payload),
  });
