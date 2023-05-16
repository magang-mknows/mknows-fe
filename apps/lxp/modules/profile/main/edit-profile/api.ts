import api from '../../../../services/api';
import { TUserDataResponse } from './types';

export const getUserData = async (): Promise<TUserDataResponse> => {
  const { data } = await api.get('/users/me');
  return data;
};
