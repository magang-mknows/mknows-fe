import { useRecoilState, useRecoilValue } from 'recoil';
import {
  userFilter,
  userSearch,
  CategoryStatusState,
  IdentityStatusState,
  CharacterStatusState,
  CapabilityStatusState,
} from './store';
import {
  TUserDataResponse,
  TUserQueryResponse,
  StatusReturnTypeCategory,
  ReturnTypesDataCapabiity,
  ReturnTypesDataCharacter,
  ReturnTypesDataIdentity,
} from './types';

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

export const useCategoryStatus = (): StatusReturnTypeCategory => {
  const [get, set] = useRecoilState(CategoryStatusState);
  return {
    setDataCategory: (val: string) => set(val),
    getDataCategory: get,
  };
};

export const useIdentityStatus = (): ReturnTypesDataIdentity => {
  const [get, set] = useRecoilState(IdentityStatusState);
  return {
    setDataIdentity: (val: boolean) => set(val),
    getDataIdentity: get,
  };
};

export const useCharacterStatus = (): ReturnTypesDataCharacter => {
  const [get, set] = useRecoilState(CharacterStatusState);
  return {
    setDataCharacter: (val: boolean) => set(val),
    getDataCharacter: get,
  };
};

export const useCapabilityStatus = (): ReturnTypesDataCapabiity => {
  const [get, set] = useRecoilState(CapabilityStatusState);
  return {
    setDataCapability: (val: boolean) => set(val),
    getDataCapability: get,
  };
};
