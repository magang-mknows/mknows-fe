import api from '../../../../services/api';
import { TProfileResponse } from './types';

export const getProfileMe = async (): Promise<TProfileResponse> => {
  const { data } = await api.get('/auth/me');
  return data;
};
