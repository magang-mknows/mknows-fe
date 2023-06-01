import { useRecoilState } from "recoil";
import {
  TBiodataAdm,
  TBiodataResponse,
  TConstantsResponse,
  TFamilyAdm,
  TFamilyResponse,
  TFileAdm,
  TFileResponse,
  TGetAdmResponse,
  TStatusReturnAdministration,
} from "./types";
import { AdministrationStatusState } from "./store";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import {
  constantsRequest,
  familyInformationRequest,
  fileInformationRequest,
  getAdmRequest,
  privateInformationRequest,
} from "./api";

export * from "./common/hooks";

export const useAdministrationStatus = (): TStatusReturnAdministration => {
  const [getStatus, setStatus] = useRecoilState(AdministrationStatusState);
  return {
    setAdministrationStatus: (val: string) => setStatus(val),
    getAdministrationStatus: getStatus,
  };
};

export const useGetAllAdministration = (): UseQueryResult<TGetAdmResponse> =>
  useQuery({
    queryKey: ["get-all-adminitration"],
    queryFn: async () => await getAdmRequest(),
  });

export const usePrivateInformation = (): UseMutationResult<
  TBiodataResponse,
  TMetaErrorResponse,
  TBiodataAdm,
  unknown
> => {
  return useMutation({
    mutationKey: ["private-information-post"],
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
    mutationKey: ["family-information-post"],
    mutationFn: async (payload) => await familyInformationRequest(payload),
  });
};

export const useFileInformation = (): UseMutationResult<
  TFileResponse,
  TMetaErrorResponse,
  TFileAdm,
  unknown
> => {
  return useMutation({
    mutationKey: ["file-information-post"],
    mutationFn: async (payload) => await fileInformationRequest(payload),
  });
};

export const useConstants = (): UseQueryResult<TConstantsResponse> =>
  useQuery({
    queryKey: ["get-constants-adm"],
    queryFn: async () => await constantsRequest(),
  });
