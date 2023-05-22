import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { getQuotaResponse } from './api';
import { TQuotaDataResponse, TQuotaResponse } from './types';
import { useRecoilValue } from 'recoil';
import { icon } from './store';

export const useQuota = (): UseQueryResult<
  TQuotaResponse,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ['get-quota'],
    queryFn: async () => await getQuotaResponse(),
  });
};

export const useQuotaData = (): TQuotaDataResponse => {
  const get = useRecoilValue(icon);
  return {
    getQuotaData: get,
  };
};
