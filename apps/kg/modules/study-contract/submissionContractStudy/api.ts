import api from '../../../services/api';
import { TKRSResponse } from './type';

export const krsGetByIdRequest = async (
  id: string | number
): Promise<TKRSResponse> => {
  const { data } = await api.get(`/student-subject/major/${id}/contracts`);
  return data;
};
