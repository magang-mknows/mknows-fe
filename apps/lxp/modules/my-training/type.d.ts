import { ICommonMetaResponse } from '../../service/types';

export type TDepartmentItems = {
  name: string;
  description: string;
  point: number;
  thumbnail: string;
  id: string;
  companyName: string;
};

export type TDepartmentResponse = ICommonMetaResponse<TDepartmentItems>;
