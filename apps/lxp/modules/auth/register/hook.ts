import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TRegisterPayload } from './types';
import { TMetaErrorResponse, TMetaItem } from '@mknows-frontend-services/utils';
import { registerRequest } from './api';

export const useRegister = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TRegisterPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['key'],
    mutationFn: async (payload) => await registerRequest(payload),
  });
