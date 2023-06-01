import { useRecoilState } from "recoil";
import { PopupModalConfirmModul } from "./store";
import {
  TModuleContentResponse,
  TWatchedVideoProgressReponse,
  TusePopupConfirmModul,
} from "./types";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { moduleContentGetRequest, watchedVideoProgressRequest } from "./api";

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

export const useWatchedVideoSubmitById = (): UseMutationResult<
  TWatchedVideoProgressReponse,
  TMetaErrorResponse,
  string,
  unknown
> =>
  useMutation({
    mutationKey: ["module-watched-video-progress"],
    mutationFn: async (videoId) => await watchedVideoProgressRequest(videoId),
  });
