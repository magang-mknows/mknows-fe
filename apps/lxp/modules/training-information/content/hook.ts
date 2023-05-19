import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TSubjectResponse } from './types';
import { getSubjectByDeptId } from './api';

export const useGetSubjetByDeptId = (
  deptId: string
): UseQueryResult<TSubjectResponse, unknown> =>
  useQuery({
    queryKey: ['get-subject-by-dept-id', deptId],
    queryFn: async () => await getSubjectByDeptId(deptId),
  });
