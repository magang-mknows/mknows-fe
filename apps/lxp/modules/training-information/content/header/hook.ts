import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { askDepartment } from './api';
import { TAskDeptResponse } from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';

export const useAskDepartment = (): UseMutationResult<
  TAskDeptResponse,
  TMetaErrorResponse,
  string,
  unknown
> =>
  useMutation({
    mutationKey: ['ask-department'],
    mutationFn: async (payload) => {
      return await askDepartment(payload);
    },
  });
