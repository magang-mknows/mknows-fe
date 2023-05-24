import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TDepartmentResponse } from './types';
import { getAllDepartments } from './api';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';

export const useGetAllDepartments = (
  keyword: string
): UseQueryResult<TDepartmentResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-all-department', keyword],
    queryFn: async () => {
      await getAllDepartments(keyword);
    },
  });
};
