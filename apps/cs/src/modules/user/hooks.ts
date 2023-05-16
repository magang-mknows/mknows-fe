import { useRecoilState, useRecoilValue } from 'recoil';
import { userFilter, userSearch, CategoryStatusState } from './store';
// import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TDataCategory, TUserDataResponse, TUserQueryResponse } from './types';

export const useUserData = (): TUserDataResponse => {
  const get = useRecoilValue(userFilter);
  return {
    getUserData: get,
  };
};

export const useUserQuery = (): TUserQueryResponse => {
  const [get, set] = useRecoilState(userSearch);
  return {
    getUserQuery: get,
    setUserQuery: (val: string) => set(val),
  };
};

export const useCategoryStatus = (): TDataCategory => {
  const [getStatus, setStatus] = useRecoilState(CategoryStatusState);
  return {
    getDataCategory: getStatus,
    setDataCategory: (val: string) => setStatus(val),
  };
};
