import { useRecoilValue, useRecoilState } from 'recoil';
import { quotaDummyData, resultSearch } from './store';
import { TResultDataResponse, TQuotaQueryResponse } from './types';

export const useResultData = (): TResultDataResponse => {
  const get = useRecoilValue(quotaDummyData);
  return {
    getResultData: get,
  };
};

export const useQuotaQuery = (): TQuotaQueryResponse => {
  const [get, set] = useRecoilState(resultSearch);
  return {
    getQuotaQuery: get,
    setQuotaQuery: (val: string) => set(val),
  };
};
