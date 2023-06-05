import { confirmModuleState } from "./store";
import { useRecoilState } from "recoil";
import { ConfirmModulTypes, TModuleResponse } from "./type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { moduleGetRequest } from "./api";

export const useConfirmModul = (): ConfirmModulTypes => {
  const [getConfirm, setConfirm] = useRecoilState(confirmModuleState);
  return {
    setConfirmModul: (val: boolean) => setConfirm(val),
    getConfirmModul: getConfirm,
  };
};

export const useGetModuleById = (
  id: string | number,
): UseQueryResult<TModuleResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["module-get", id],
    queryFn: async () => await moduleGetRequest(id),
  });
