import api from '../../../services/api';
import { TTakenDepartmentResponse } from './types';

export const getTakenDepartment =
  async (): Promise<TTakenDepartmentResponse> => {
    const { data } = await api.get('/work-plans/department/me');
    return data;
  };
