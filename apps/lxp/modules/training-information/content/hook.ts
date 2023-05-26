import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { TAskKRSResponse, TMyWorkPlanResponse, TSubjectResponse } from "./types";
import { askKRS, getMyWorkPlan, getSubjectByDeptId } from "./api";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

export const useGetSubjetByDeptId = (deptId: string): UseQueryResult<TSubjectResponse, unknown> =>
  useQuery({
    queryKey: ["get-subject-by-dept-id", deptId],
    queryFn: async () => await getSubjectByDeptId(deptId),
  });

export const useAskKRS = (): UseMutationResult<
  TAskKRSResponse,
  TMetaErrorResponse,
  string,
  unknown
> =>
  useMutation({
    mutationKey: ["ask-department"],
    mutationFn: async (payload) => {
      return await askKRS(payload);
    },
  });

export const useGetMyWorkPlan = (): UseQueryResult<TMyWorkPlanResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["get-my-work-plan"],
    queryFn: async () => await getMyWorkPlan(),
  });
