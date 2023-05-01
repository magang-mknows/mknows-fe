import api from '../../services/api';
import { TAssignmentUser } from './types';

export const myAssigmentRequest = async (): Promise<TAssignmentUser> => {
  const { data } = await api.get('/studi-ku/assignment/session/{session_id}');
  return data;
};
