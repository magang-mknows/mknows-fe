import api from '../../../services/api';
import { TDiscussionResponse } from './types';

export const getDisscussionRequest = async (): Promise<TDiscussionResponse> => {
  const { data } = await api.get('/discussion');
  return data;
};

export const DiscussionGetByIdRequest = async (
  id: string
): Promise<TDiscussionResponse> => {
  const { data } = await api.get(`/discussion/forum/${id}`);
  return data;
};
