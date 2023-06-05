import { useRecoilValue, useRecoilState } from "recoil";
import { filterActionProcess, icon, resultFilter, resultSearch } from "./store";
import {
  TProcessItem,
  TProcessParams,
  TProcessResponse,
  TRequestDataResponse,
  TRequestItem,
  TRequestResponse,
  TResultDataResponse,
  TResultQueryResponse,
} from "./types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { getDataProcess, getDataRequest, getProcessResponse } from "./api";

export const useRequestData = (): TRequestDataResponse => {
  const get = useRecoilValue(icon);
  return {
    getRequestData: get,
  };
};

export const useResultData = (): TResultDataResponse => {
  const get = useRecoilValue(resultFilter);
  return {
    getResultData: get,
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

export const useDataProcess = (): UseQueryResult<TProcessResponse, TProcessItem> => {
  return useQuery({
    queryKey: ["get-process-data"],
    queryFn: async () => await getDataProcess(),
  });
};

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
