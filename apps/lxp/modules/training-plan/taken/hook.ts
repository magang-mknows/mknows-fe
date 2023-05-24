import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getTakenDepartment } from './api';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { TTakenDepartmentResponse } from './types';

export const useGetTakenDepartments = (): UseQueryResult<
  TTakenDepartmentResponse,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ['get-taken-department'],
    queryFn: async () => await getTakenDepartment(),
  });
};
