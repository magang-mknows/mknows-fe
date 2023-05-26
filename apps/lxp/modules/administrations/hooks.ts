import { useRecoilState } from "recoil";
import { PrivateInformationState, AdministrationStatusState } from "./store";
import {
  ReturnTypesPrivateInformation,
  StatusReturnTypesAdministration,
  TAdministrationResponse,
} from "./type";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { getAdministrationRequest, privateInformationRequest } from "./api";
// import { AdministrationService } from "./api";

export const usePrivateInformationStatus = (): ReturnTypesPrivateInformation => {
  const [get, set] = useRecoilState(PrivateInformationState);
  return {
    setPrivateStatus: (val: boolean) => set(val),
    getPrivateStatus: get,
  };
};
export const useAdministrationStatus = (): StatusReturnTypesAdministration => {
  const [getStatus, setStatus] = useRecoilState(AdministrationStatusState);
  return {
    setAdministrationStatus: (val: string) => setStatus(val),
    getAdministrationStatus: getStatus,
  };
};

export const useGetAllAdministration = (): UseQueryResult<TAdministrationResponse, unknown> =>
  useQuery<TAdministrationResponse>({
    queryKey: ["get-all-administration"],
    queryFn: async () => await getAdministrationRequest(),
  });

export const usePrivateInformation = (): UseMutationResult<TAdministrationResponse, unknown> => {
  return useMutation({
    mutationKey: ["private-information-post"],
    mutationFn: async (payload) => await privateInformationRequest(payload),
  });
};
