import api from '../../../services/api';
import { TLoginResponse, TLoginPayload, TLoginByGooglePayload } from './types';

export const loginRequest = async (
  payload?: TLoginPayload
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>('/auth/login', payload);
  return data;
};

export const loginByGoogleRequest = async (
  payload: TLoginByGooglePayload
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>(
    '/auth/login/google/callback',
    payload
  );
  return data;
};

export const logoutRequest = async ({
  refresh_token,
}: {
  refresh_token: string;
}) => await api.post('/auth/logout', { refresh_token });
