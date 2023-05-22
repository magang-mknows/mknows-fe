import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TDepartmentResponse } from './type';
import { getDepartmentRequest } from './api';

export const useGetDepartment = (): UseQueryResult<
  TDepartmentResponse,
  unknown
> =>
  useQuery<TDepartmentResponse>({
    queryKey: ['get-all-administration'],
    queryFn: async () => await getDepartmentRequest(),
  });
