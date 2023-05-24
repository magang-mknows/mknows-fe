import api from '../../services/api';
import { TQuotaParams, TQuotaResponse } from './types';

<<<<<<< HEAD
export const getQuotaResponse = async (
  params: TQuotaParams
): Promise<TQuotaResponse> => {
  const { data } = await api({
    headers: {
      'Content-Type': 'application/json',
    },
    url: '/quotas/request',
    params,
  });
=======
export const getQuotaResponse = async (): Promise<TQuotaResponse> => {
  const { data } = await api.get('/quotas/request');
>>>>>>> develop
  return data;
};
