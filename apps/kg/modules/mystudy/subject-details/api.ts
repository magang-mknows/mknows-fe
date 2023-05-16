import api from '../../../services/api';
import { TSubjectDetailsResponse } from './type';

export const subjectDetailsGetRequest = async (
  id: string | number
): Promise<TSubjectDetailsResponse> => {
  const { data } = await api.get(`/studi-ku/subject/${id}/sessions`);
  return data;
};
