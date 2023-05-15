import api from '../../../services/api';
import { TMajorResponse } from './types';

export const majorGetByIdRequest = async (
  id: string | number
): Promise<TMajorResponse> => {
  const { data } = await api.get(`/major/${id}`);
  return data;
};
