import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  IUpdateUserPayload,
  TUpdateUserResponse,
  TUserProfilePayload,
  TUserProfileResponse,
} from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { updateUserData, updateUserProfile } from './api';

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
