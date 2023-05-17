import { useRecoilValue, useRecoilState } from 'recoil';
import { quotaDummyData, quotaSearch } from './store';
import { TResultDataResponse, TQuotaQueryResponse } from './types';

export const useResultData = (): TResultDataResponse => {
  const get = useRecoilValue(quotaDummyData);
  return {
    getResultData: get,
  };
};

export const useQuotaQuery = (): TQuotaQueryResponse => {
  const [get, set] = useRecoilState(quotaSearch);
  return {
    getQuotaQuery: get,
    setQuotaQuery: (val: string) => set(val),
  };
};
