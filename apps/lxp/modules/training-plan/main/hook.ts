import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TDepartmentResponse } from './types';
import { getAllDepartments } from './api';

export const useGetAllDepartments = (
  keyword: string
): UseQueryResult<TDepartmentResponse, unknown> =>
  useQuery<TDepartmentResponse>({
    queryKey: ['get-all-department', keyword],
    queryFn: async () => await getAllDepartments(keyword),
  });
