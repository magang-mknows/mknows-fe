import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { loginRequest } from './api';
import { TLoginResponse, TLoginPayload } from './types';

export const useLogin = (): UseMutationResult<
  TLoginResponse,
  TMetaErrorResponse,
  TLoginPayload,
  null
> => {
  return useMutation({
    mutationKey: ['login-lxp'],
    mutationFn: (params) => loginRequest(params),
  });
};
