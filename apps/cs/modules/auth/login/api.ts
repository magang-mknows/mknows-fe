import api from '../../../service/api';
import { TLoginData, TLoginPayload } from './types';

export const loginRequest = async (
  payload: TLoginPayload
): Promise<TLoginData> => {
  const { data } = await api.post('/auth/login', payload);
  return data;
};
