import api from '../../../services/api';
import { TSubjectResponse } from './types';

export const subjectRequest = async (): Promise<TSubjectResponse> => {
  const { data } = await api.get('/subject');
  return data;
};
