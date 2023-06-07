import api from '../../../services/api';
import { TEventResponse } from './types';

export const eventGetByIdRequest = async (
  id: string | number
): Promise<TEventResponse> => {
  const { data } = await api.get(`/event/${id}`);
  return data;
};
