import api from '../../../../services/api';
import { TAskDeptResponse } from './types';

export const askDepartment = async (
  deptId: string
): Promise<TAskDeptResponse> => {
  const { data } = await api.post(`/work-plans/ask/department/${deptId}`);
  return data;
};
