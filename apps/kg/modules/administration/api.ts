import api from '../../services/api';
import { TBiodataAdm, TBiodataResponse } from './types';

export const privateInformationRequest = async (
  payload: TBiodataAdm
): Promise<TBiodataResponse> => {
  const { data } = await api.post('/administration/biodata', payload);
  return data;
};

export const privateInformationGetRequest =
  async (): Promise<TBiodataResponse> => {
    const { data } = await api.get('/administration');
    return data;
  };
