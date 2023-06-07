import api from '../../../services/api';
import { TEventResponse } from './types';

export const eventRegisteredGetRequest = async (): Promise<TEventResponse> => {
  const { data } = await api.get('/student-event/registered');
  return data;
};
