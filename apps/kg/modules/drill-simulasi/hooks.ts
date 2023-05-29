import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { PopupModalSubmissionOpen } from "./store";
import {
  ReturnTypesPopupSubmissionStatus,
  TSimulationHistoryResponse,
  TSimulationResponse,
} from "./type";
import { HistoryService, SimulationService } from "./api";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

export const useGetAllSimulation = (): UseQueryResult<TSimulationResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-all-simulation"],
    queryFn: async () => await SimulationService(),
  });

export const useGetHistorySimulation = (): UseQueryResult<
  TSimulationHistoryResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ["get-history-simulation"],
    queryFn: async () => await HistoryService(),
  });

export const usePopupSubmissionStatus = (): ReturnTypesPopupSubmissionStatus => {
  const [get, set] = useRecoilState(PopupModalSubmissionOpen);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
