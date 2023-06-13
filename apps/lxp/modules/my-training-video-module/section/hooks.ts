import {  TVideoModule, TVideoModuleResponse,  TVideoModuleParams } from "../type";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { getMyWorkVideoModule, postWatchVideo } from "../api";
import { TMyTrainingModuleResponse } from "../../mytraining-module/type";


export const useGetMyWorkVideoModule = (
  params:  TVideoModuleParams,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", params],
    queryFn: async () => await getMyWorkVideoModule(params),
  });

  export const usePostWatchVideo = (
    params:  TVideoModuleParams,
  ): UseMutationResult< TVideoModuleResponse, unknown> =>
    useMutation({
      mutationKey: ["submit-watch-video", params],
      mutationFn: async (payload) => await postWatchVideo(params),
    });
  