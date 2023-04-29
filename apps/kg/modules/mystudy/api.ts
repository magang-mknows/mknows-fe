import api from '../../services/api';
import { TMyStudyResponse } from './types';

export const mystudyRequest = async (): Promise<TMyStudyResponse> => {
  const { data } = await api.get('/studi-ku');
  return data;
};
