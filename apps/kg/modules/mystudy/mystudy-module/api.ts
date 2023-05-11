import api from '../../../services/api';
import { TMyStudyResponse } from './types';

export const mystudyGetRequest = async (): Promise<TMyStudyResponse> => {
  const { data } = await api.get('/studi-ku/user');
  return data;
};
