import { TMetaResponse } from '@mknows-frontend-services/utils';

export interface IDepartment {
  id: string;
  name: string;
  category: string;
  point: number;
  thumbnail: string;
  slug: string;
  description: string;
}
export interface TDepartmentItems extends IDepartment {
  subject_department: SubjectDepartment[];
}

export interface SubjectDepartment {
  id: string;
  credit: number;
  subject_batch: SubjectBatch[];
}

export interface SubjectBatch {
  id: string;
}

export type TDepartmentResponse = TMetaResponse<TDepartmentItems>;

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

export type TTakenDepartmentResponse = TMetaResponse<ITakenDepartmentItem>;
