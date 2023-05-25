import { TMetaResponse } from '@mknows-frontend-services/utils';

export type TSubjectHeaderProps = {
  name: string;
  category?: string;
  point?: number;
  batch?: number;
  id: string;
  status?: string;
};

export type TAskDeptItem = {
  id: string;
  employee_id: string;
  department_id: string;
  status: string;
  updated_at: string;
  created_at: string;
  deleted_at: string;
};

export type TAskDeptResponse = TMetaResponse<TAskDeptItem>;
