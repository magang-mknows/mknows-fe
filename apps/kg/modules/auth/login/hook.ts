import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { useMutation } from '@tanstack/react-query';
import type { UseMutationResult } from '@tanstack/react-query';
import { loginRequest } from './api';
import { TLoginResponse, TLoginPayload, TusePopupForgotPass } from './types';
import { useRecoilState } from 'recoil';
import { PopupModalForgotPass } from './store';

export const useLogin = (): UseMutationResult<
  TLoginResponse,
  TMetaErrorResponse,
  TLoginPayload,
  null
> => {
  return useMutation({
    mutationKey: ['login-kg'],
    mutationFn: (params) => loginRequest(params),
  });
};

export const usePopupForgotPass = (): TusePopupForgotPass => {
  const [get, set] = useRecoilState(PopupModalForgotPass);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
