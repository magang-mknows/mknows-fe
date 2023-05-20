import { useRecoilValue, useRecoilState } from 'recoil';
import { icon, resultFilter, resultSearch } from './store';
import {
  TRequestDataResponse,
  TRequestResponse,
  TResultDataResponse,
  TResultQueryResponse,
} from './types';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { getDataRequest } from './api';

export const useRequestData = (): TRequestDataResponse => {
  const get = useRecoilValue(icon);
  return {
    getRequestData: get,
  };
};

export const useResultData = (): TResultDataResponse => {
  const get = useRecoilValue(resultFilter);
  return {
    getResultData: get,
  };
};

export const useResultQuery = (): TResultQueryResponse => {
  const [get, set] = useRecoilState(resultSearch);
  return {
    getResultQuery: get,
    setResultQuery: (val: string) => set(val),
  };
};

export const useRequest = (): UseQueryResult<
  TRequestResponse,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ['get-reqest'],
    queryFn: async () => await getDataRequest(),
  });
};
