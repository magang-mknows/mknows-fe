import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { dataTabelState, mystudyAssignmentState } from "./stores";
import {
  Instruction,
  TMyStudyAssignmentItem,
  TMyStudyAssignmentResponse,
  TMyStudyAssignmentSubmissionPayload,
} from "./type";
import { useRecoilState } from "recoil";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { assignmentGetRequest, assignmentSubmissionRequest } from "./api";

type Instructions = {
  setInstruction: (val: Array<Instruction>) => void;
  getInstruction: Array<Instruction>;
};

type TuseMyStudyAssignmentItem = {
  getMyStudyAssignmentItem: TMyStudyAssignmentItem | null;
  setMyStudyAssignmentItem: (val: TMyStudyAssignmentItem) => void;
};

export const useInstruction = (): Instructions => {
  const [getInstruction, setInstruction] = useRecoilState(dataTabelState);
  return {
    setInstruction: (val: Array<Instruction>) => setInstruction(val),
    getInstruction: getInstruction,
  };
};

export const useMyStudyAssignmentItem = (): TuseMyStudyAssignmentItem => {
  const [get, set] = useRecoilState(mystudyAssignmentState);
  return {
    getMyStudyAssignmentItem: get,
    setMyStudyAssignmentItem: (val) => set(val),
  };
};

export const useGetMyStudyAssignmentById = (
  id: string | number,
): UseQueryResult<TMyStudyAssignmentResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["mystudy-assignment-get", id],
    queryFn: async () => await assignmentGetRequest(id),
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
