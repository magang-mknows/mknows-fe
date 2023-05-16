import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TLoginPayload, TLoginResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { loginRequest } from './api';

export const useLogin = (): UseMutationResult<
  TLoginResponse,
  TMetaErrorResponse,
  TLoginPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['login-cs'],
    mutationFn: async (payload) => await loginRequest(payload),
  });
