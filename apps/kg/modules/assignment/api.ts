import api from '../../services/api';
import { TAssignmentUser } from './types';

export const asigmentGetRequest = async (
  session_id: string
): Promise<TAssignmentUser> => {
  const { data } = await api.get(`/studi-ku/assignment/session/${session_id}`);
  return data;
};

export const assigmentPutRequest = async (
  session_id: string
): Promise<TAssignmentUser> => {
  const { data } = await api.put(
    `/studi-ku/assignment/session/${session_id}/submission`
  );
  return data;
};
