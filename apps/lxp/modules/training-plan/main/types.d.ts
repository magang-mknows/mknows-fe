import { TMetaResponse } from '@mknows-frontend-services/utils';

export type TDepartmentItems = {
  id: string;
  name: string;
  category: string;
  point: number;
  thumbnail: string;
  slug: string;
};

export type TDepartmentResponse = TMetaResponse<TDepartmentItems>;
