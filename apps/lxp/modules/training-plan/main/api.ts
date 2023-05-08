import api from '../../../services/api';
import { TDepartmentResponse } from './types';

export const getAllDepartments = async (
  keyword: string
): Promise<TDepartmentResponse> => {
  const { data } = await api.get(
    keyword === '' ? '/departments' : `/departments/filter?search=${keyword}`
  );
  return data;
};
