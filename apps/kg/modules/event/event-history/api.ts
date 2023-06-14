import api from '../../../services/api';
import { TEventResponse } from './types';

export const eventHistoryGetRequest = async (): Promise<TEventResponse> => {
  const { data } = await api.get('/student-event/history');
  return data;
};
