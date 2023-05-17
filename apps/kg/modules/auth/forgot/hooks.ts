import { TMetaErrorResponse, TMetaItem } from '@mknows-frontend-services/utils';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TForgotPasswordPayload, TusePopupForgotPass } from './types';
import { forgotPasswordRequest } from './api';
import { useRecoilState } from 'recoil';
import { PopupModalForgotPass } from './store';

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

export const usePopupForgotPass = (): TusePopupForgotPass => {
  const [get, set] = useRecoilState(PopupModalForgotPass);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
