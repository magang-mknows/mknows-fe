import { useMutation, UseMutationResult } from '@tanstack/react-query';
import { loginRequest } from './api';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { TLoginData, TLoginPayload } from './types';

export const useLogin = (): UseMutationResult<
  TLoginData,
  TMetaErrorResponse,
  TLoginPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['login-cs'],
    mutationFn: async (payload) => await loginRequest(payload),
  });
};
