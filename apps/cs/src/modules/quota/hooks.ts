import { useRecoilValue, useRecoilState } from 'recoil';
import { resultDummyData, resultSearch } from './store';
import { TResultDataResponse, TResultQueryResponse } from './types';

export const useResultData = (): TResultDataResponse => {
  const get = useRecoilValue(resultDummyData);
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
