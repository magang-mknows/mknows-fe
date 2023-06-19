import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { mystudyAssignmentState } from "./stores";
import {
  TAssigmentParams,
  TMyStudyAssignmentResponse,
  TMyStudyAssignmentSubmissionPayload,
  TuseMyStudyAssignmentItem,
} from "./type";
import { useRecoilState } from "recoil";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { assignmentGetRequest, assignmentSubmissionRequest } from "./api";

export const useMyStudyAssignmentItem = (): TuseMyStudyAssignmentItem => {
  const [get, set] = useRecoilState(mystudyAssignmentState);
  return {
    getMyStudyAssignmentItem: get,
    setMyStudyAssignmentItem: (val) => set(val),
  };
};

export const useGetMyStudyAssignmentById = (
  params:TAssigmentParams,
): UseQueryResult<TMyStudyAssignmentResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["mystudy-assignment-get", params.subjectID,params.batchID],
    queryFn: async () => await assignmentGetRequest(params),
  });

export const useUpdateSubmissionMyStudyAssigment = (): UseMutationResult<
  TMyStudyAssignmentResponse,
  TMetaErrorResponse,
  TMyStudyAssignmentSubmissionPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["update-submission-assignment"],
    mutationFn: async (payload) => await assignmentSubmissionRequest(payload),
  });

