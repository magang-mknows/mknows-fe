import { useRecoilState } from 'recoil';
import {
  TBiodataAdm,
  TBiodataResponse,
  TFamilyAdm,
  TFamilyResponse,
  TStatusReturnAdministration,
} from './types';
import { AdministrationStatusState } from './store';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
} from '@tanstack/react-query';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { familyInformationRequest, privateInformationRequest } from './api';

export * from './common/hooks';

export const useAdministrationStatus = (): TStatusReturnAdministration => {
  const [getStatus, setStatus] = useRecoilState(AdministrationStatusState);
  return {
    setAdministrationStatus: (val: string) => setStatus(val),
    getAdministrationStatus: getStatus,
  };
};

export const usePrivateInformation = (): UseMutationResult<
  TBiodataResponse,
  TMetaErrorResponse,
  TBiodataAdm,
  unknown
> => {
  return useMutation({
    mutationKey: ['private-information-post'],
    mutationFn: async (payload) => await privateInformationRequest(payload),
  });
};

export const useFamilyInformation = (): UseMutationResult<
  TFamilyResponse,
  TMetaErrorResponse,
  TFamilyAdm,
  unknown
> => {
  return useMutation({
    mutationKey: ['family-information-post'],
    mutationFn: async (payload) => await familyInformationRequest(payload),
  });
};

// export const useGetAdministration = (): UseQueryResult<>
