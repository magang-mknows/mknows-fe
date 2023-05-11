import api from '../../../services/api';
import { TDiscussionResponse } from './types';

export const getDisscussionRequest = async (): Promise<TDiscussionResponse> => {
  const { data } = await api.get('/discussion');
  return data;
};
