import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { TModuleResponse, TusePopupConfirmModul, paramsPostModule } from "./types";
import { moduleResumeSubmitRequest } from "./api";
import { useRecoilState } from "recoil";
import { PopupModalConfirmModul } from "../../my-training-discussion";

export const useSubmitModuleResumeById = (
  params: paramsPostModule,
): UseMutationResult<TModuleResponse,  unknown> =>
  useMutation({
    mutationKey: ["submit-module-resume", params],
    mutationFn: async (payload) => await moduleResumeSubmitRequest(params, payload),
  });

  export const usePopupConfirmModul = (): TusePopupConfirmModul => {
    const [get, set] = useRecoilState(PopupModalConfirmModul);
    return {
      setPopupStatus: (val: boolean) => set(val),
      getPopupStatus: get,
    };
  };
  
  
  // export const useWatchedVideoSubmitById = (): UseMutationResult<
  //   TWatchedVideoProgressReponse,
  //   TMetaErrorResponse,
  //   string,
  //   unknown
  // > =>
  //   useMutation({
  //     mutationKey: ["module-watched-video-progress"],
  //     mutationFn: async (videoId) => await watchedVideoProgressRequest(videoId),
  //   });