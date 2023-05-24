import api from '../../../services/api';
import { TEventResponse } from './types';

export const eventGetRequest = async (): Promise<TEventResponse> => {
  const { data } = await api.get('/event');
  return data;
};
