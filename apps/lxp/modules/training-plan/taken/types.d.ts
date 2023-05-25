import { TMetaResponseSingle } from '@mknows-frontend-services/utils';
import { IDepartment } from '../main/types';

export interface ITakenDepartmentItem {
  id: string;
  employee_id: string;
  department_id: string;
  batch_id: string;
  status: string;
  subject_taken: number;
  subject_finished: number;
  total_final_score: number;
  Department: IDepartment;
}

export type TTakenDepartmentResponse =
  TMetaResponseSingle<ITakenDepartmentItem>;
