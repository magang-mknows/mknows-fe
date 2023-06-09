import { useRecoilState } from "recoil";
import {
  userSearch,
  CategoryStatusState,
  IdentityStatusState,
  CharacterStatusState,
  CapabilityStatusState,
  filterActionUser,
} from "./store";
import {
  TUserQueryResponse,
  StatusReturnTypeCategory,
  ReturnTypesDataCapabiity,
  ReturnTypesDataCharacter,
  ReturnTypesDataIdentity,
  TUserParams,
  TUserResponse,
} from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { deleteUserResponse, getUserResponse } from "./api";

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

export const useFilterAction = () => {
  const [get, set] = useRecoilState(filterActionUser);
  return {
    getFilterAction: get,
    setFilterAction: (params: TUserParams) => set(params),
  };
};

export const useUser = (params: TUserParams): UseQueryResult<TUserResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["get-user", params],
    queryFn: async () => await getUserResponse(params),
  });
};

export const useDeleteUser = (): UseMutationResult<
  TUserResponse,
  TMetaErrorResponse,
  string,
  unknown
> =>
  useMutation({
    mutationKey: ["delete-user"],
    mutationFn: async (id) => await deleteUserResponse(id),
  });
