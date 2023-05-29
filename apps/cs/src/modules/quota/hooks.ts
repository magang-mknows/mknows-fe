import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getQuotaResponse } from "./api";
import { TQuotaDataResponse, TQuotaResponse, TQuotaParams } from "./types";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterAction, icon } from "./store";

export const useFilterAction = () => {
  const [get, set] = useRecoilState(filterAction);
  return {
    getFilterAction: get,
    setFilterAction: (params: TQuotaParams) => set(params),
  };
};

export const useQuota = (
  params: TQuotaParams,
): UseQueryResult<TQuotaResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["get-quota", params],
    queryFn: async () => await getQuotaResponse(params),
  });
};

export const useQuotaData = (): TQuotaDataResponse => {
  const get = useRecoilValue(icon);
  return {
    getQuotaData: get,
  };
};
