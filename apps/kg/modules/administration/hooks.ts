import { useRecoilState } from 'recoil';
import {
  TBiodataAdm,
  TBiodataResponse,
  TStatusReturnAdministration,
} from './types';
import { AdministrationStatusState } from './store';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
} from '@tanstack/react-query';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';
import { privateInformationRequest } from './api';

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

// export const useGetAdministration = (): UseQueryResult<>
