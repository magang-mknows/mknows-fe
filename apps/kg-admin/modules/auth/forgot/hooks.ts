import { TMetaErrorResponse, TMetaItem } from '@mknows-frontend-services/utils';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TForgotPasswordPayload } from './types';
import { forgotPasswordRequest } from './api';

export const useForgot = (): UseMutationResult<
  TMetaItem,
  TMetaErrorResponse,
  TForgotPasswordPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['forgot-password-post'],
    mutationFn: async (payload) => await forgotPasswordRequest(payload),
  });
