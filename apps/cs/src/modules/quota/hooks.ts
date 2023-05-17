import { useRecoilValue, useRecoilState } from 'recoil';
import { quotaSearch, resultFilter } from './store';
import { TResultDataResponse, TQuotaQueryResponse } from './types';

export const useQuotaQuery = (): TQuotaQueryResponse => {
  const [get, set] = useRecoilState(quotaSearch);
  return {
    getQuotaQuery: get,
    setQuotaQuery: (val: string) => set(val),
  };
};

export const useResultData = (): TResultDataResponse => {
  const get = useRecoilValue(resultFilter);
  return {
    getResultData: get,
  };
};
