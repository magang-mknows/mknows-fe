import api from '../../services/api';
import { TSubjectResponse } from './types';

export const getSubjectByDeptId = async (
  deptId: string
): Promise<TSubjectResponse> => {
  const { data } = await api.get(`/subjects/department/${deptId}`);
  return data;
};
