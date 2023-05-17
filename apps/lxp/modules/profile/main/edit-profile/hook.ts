import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  IUpdateUserPayload,
  TUpdateUserResponse,
  TUserDataResponse,
  TUserProfilePayload,
  TUserProfileResponse,
} from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { getUserData, updateUserData, updateUserProfile } from './api';

export const useGetUserData = (): UseQueryResult<
  TUserDataResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['get-user-data-lxp'],
    queryFn: async () => await getUserData(),
  });

export const useUpdateUserProfile = (): UseMutationResult<
  TUserProfileResponse,
  TMetaErrorResponse,
  TUserProfilePayload,
  unknown
> =>
  useMutation({
    mutationKey: ['update-user-profile-lxp'],
    mutationFn: async (payload) => {
      return await updateUserProfile(payload);
    },
  });

export const useUpdateUserData = (): UseMutationResult<
  TUpdateUserResponse,
  TMetaErrorResponse,
  IUpdateUserPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['update-user-data-lxp'],
    mutationFn: async (payload) => {
      return await updateUserData(payload);
    },
  });
