import {
  UseMutationResult,
  useMutation,
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';
import { UpdateAvatarProfile, UpdateUserProfile, profileRequest } from './api';
import {
  TAvatarPayload,
  TAvatarResponse,
  TProfilePayload,
  TUserDetailResponse,
} from './types';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { useSession } from 'next-auth/react';

export const useProfile = (): UseQueryResult<
  TUserDetailResponse,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['get-user-me'],
    queryFn: async () => await profileRequest(),
  });
};

export const useUpdateUserProfile = (): UseMutationResult<
  TUserDetailResponse,
  TMetaErrorResponse,
  TProfilePayload,
  unknown
> => {
  const { data: session } = useSession();
  return useMutation({
    // enabled: !!session,
    mutationKey: ['update-user-profile'],
    mutationFn: async (payload) => await UpdateUserProfile(payload),
  });
};

export const useUpdateAvatar = (): UseMutationResult<
  TAvatarResponse,
  TMetaErrorResponse,
  TAvatarPayload,
  unknown
> => {
  const { data: session } = useSession();
  return useMutation({
    // enabled: !!session,
    mutationKey: ['update-avatar-profile'],
    mutationFn: async (payload) => await UpdateAvatarProfile(payload),
  });
};
