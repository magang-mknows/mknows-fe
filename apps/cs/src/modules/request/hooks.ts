import { useRecoilValue, useRecoilState } from "recoil";
import {
  filterActionProcess,
  filterActionResult,
  icon,
  resultSearch,
  filterActionResultbyId,
} from "./store";
import {
  TProcessItem,
  TProcessParams,
  TProcessResponse,
  TRequestDataResponse,
  TRequestItem,
  TRequestResponse,
  TResultByIdParams,
  TResultByIdResponse,
  TResultItem,
  TResultParams,
  TResultQueryResponse,
  TResultResponse,
} from "./types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import {
  getDataProcess,
  getDataRequest,
  getProcessResponse,
  getResultResponse,
  getResultById,
} from "./api";

export const useRequestData = (): TRequestDataResponse => {
  const get = useRecoilValue(icon);
  return {
    getRequestData: get,
  };
};

export const useResultQuery = (): TResultQueryResponse => {
  const [get, set] = useRecoilState(resultSearch);
  return {
    getResultQuery: get,
    setResultQuery: (val: string) => set(val),
  };
};

export const useRequest = (): UseQueryResult<TRequestResponse, TRequestItem> => {
  return useQuery({
    queryKey: ["get-request"],
    queryFn: async () => await getDataRequest(),
  });
};

export const useOption = (): UseQueryResult<TResultResponse, TResultItem> => {
  return useQuery({
    queryKey: ["get-option"],
    queryFn: async () => await getDataRequest(),
  });
};

export const useDataProcess = (): UseQueryResult<TProcessResponse, TProcessItem> => {
  return useQuery({
    queryKey: ["get-process-data"],
    queryFn: async () => await getDataProcess(),
  });
};
// proses page

export const useProcess = (
  params: TProcessParams,
): UseQueryResult<TProcessResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["get-process", params],
    queryFn: async () => await getProcessResponse(params),
  });
};

export const useFilterActionProcess = () => {
  const [get, set] = useRecoilState(filterActionProcess);
  return {
    getFilterActionProcess: get,
    setFilterActionProcess: (params: TProcessParams) => set(params),
  };
};

// result page

export const useResult = (
  params: TResultParams,
): UseQueryResult<TResultResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["get-process", params],
    queryFn: async () => await getResultResponse(params),
  });
};

export const useFilterActionResult = () => {
  const [get, set] = useRecoilState(filterActionResult);
  return {
    getFilterActionResult: get,
    setFilterActionResult: (params: TResultParams) => set(params),
  };
};

// result ById
export const useResultById = (
  params: TResultByIdParams,
): UseQueryResult<TResultByIdResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["get-process-id", params],
    queryFn: async () => await getResultById(params),
  });
};

export const useFilterActionResultById = () => {
  const [get, set] = useRecoilState(filterActionResultbyId);
  return {
    getFilterActionResultId: get,
    setFilterActionResultId: (params: TResultByIdParams) => set(params),
  };
};
