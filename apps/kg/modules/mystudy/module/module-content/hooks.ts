import { useRecoilState } from "recoil";
import { PopupModalConfirmModul } from "./store";
import { TModuleContentResponse, TusePopupConfirmModul } from "./types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { moduleContentGetRequest } from "./api";

export const usePopupConfirmModul = (): TusePopupConfirmModul => {
  const [get, set] = useRecoilState(PopupModalConfirmModul);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};

export const useGetModuleContentById = (
  id: string | number,
): UseQueryResult<TModuleContentResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["module-content-get", id],
    queryFn: async () => await moduleContentGetRequest(id),
  });
