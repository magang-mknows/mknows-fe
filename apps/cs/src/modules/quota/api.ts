import api from '../../services/api';
import { TQuotaParams, TQuotaResponse } from './types';

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
  return data;
};
