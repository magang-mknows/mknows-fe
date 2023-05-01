import api from '../../services/api';
import { TFacultyResponse } from './types';

export const mystudyRequest = async (): Promise<TFacultyResponse> => {
  const { data } = await api.get('/faculty');
  return data;
};
