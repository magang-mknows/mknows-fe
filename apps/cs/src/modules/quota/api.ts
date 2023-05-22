import api from '../../services/api';
import { TQuotaResponse } from './types';

export const getQuotaResponse = async (): Promise<TQuotaResponse> => {
  const { data } = await api.get('/quotas/request/all');
  return data;
};
