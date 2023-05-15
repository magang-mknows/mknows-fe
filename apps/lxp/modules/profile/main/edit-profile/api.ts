import api from '@lxp/services/api';
import { TUserDataResponse } from './types';

export const getAllUserData = async (): Promise<TUserDataResponse> => {
  const { data } = await api.get('/users/me');
  return data;
};
