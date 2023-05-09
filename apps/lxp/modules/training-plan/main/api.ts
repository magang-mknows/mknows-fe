import api from '../../../services/api';
import { TDepartmentResponse } from './types';

export const getAllDepartments = async (
  keyword: string
): Promise<TDepartmentResponse> => {
  const params = new URLSearchParams([['search', keyword]]);
  const { data } = await api.get(
    keyword === '' ? '/departments' : `/departments/filter`,
    { params }
  );
  return data;
};
