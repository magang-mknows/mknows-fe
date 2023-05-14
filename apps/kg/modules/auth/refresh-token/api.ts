import api from '../../../services/api';
import { TLoginResponse } from '../login';
import { TRefreshTokenPayload } from './types';

export const refreshTokenRequest = async (
  payload?: TRefreshTokenPayload
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>('/auth/refresh', payload);
  return data;
};
