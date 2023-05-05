import api from '../../services/api';
import {
  TBiodataAdm,
  TBiodataResponse,
  TFamilyAdm,
  TFamilyResponse,
  TFileAdm,
  TFileResponse,
} from './types';

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

export const familyInformationRequest = async (
  payload: TFamilyAdm
): Promise<TFamilyResponse> => {
  const { data } = await api.post('/administration/familial', payload);
  return data;
};

export const fileInformationRequest = async (
  payload: TFileAdm
): Promise<TFileResponse> => {
  const { data } = await api.post('/administration/file', payload);
  return data;
};
