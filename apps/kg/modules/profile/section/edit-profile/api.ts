import api from '../../../../services/api';
import {
  TAvatarPayload,
  TAvatarResponse,
  TProfilePayload,
  TUserDetailResponse,
} from './types';

export const profileRequest = async (): Promise<TUserDetailResponse> => {
  const { data } = await api.get('/user/profile/me');
  return data;
};

export const UpdateUserProfile = async (
  payload: TProfilePayload
): Promise<TUserDetailResponse> => {
  const { data } = await api.post('/user/profile/me', payload);
  return data;
};

export const UpdateAvatarProfile = async (
  payload: TAvatarPayload
): Promise<TAvatarResponse> => {
  const { data } = await api.post('/user/profile/avatar', payload);
  return data;
};
