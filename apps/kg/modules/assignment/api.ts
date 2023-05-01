import api from '../../services/api';
import { TAssignmentUser } from './types';

export const myAssigmentGetRequest = async (): Promise<TAssignmentUser> => {
  const { data } = await api.get('/studi-ku/assignment/session/{session_id}');
  return data;
};

export const myAssigmentPutRequest = async (): Promise<TAssignmentUser> => {
  const { data } = await api.put('/studi-ku/assignment/session/{session_id}/submission');
  return data;
};