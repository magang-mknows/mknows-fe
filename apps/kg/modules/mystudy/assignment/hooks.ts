import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { dataTabelState } from "./stores";
import { Instruction, TAssignmentResponse, TAssignmentSubmissionPayload } from "./type";
import { useRecoilState } from "recoil";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { assignmentGetRequest, assignmentSubmissionRequest } from "./api";

type Instructions = {
  setInstruction: (val: Array<Instruction>) => void;
  getInstruction: Array<Instruction>;
};

export const useInstruction = (): Instructions => {
  const [getInstruction, setInstruction] = useRecoilState(dataTabelState);
  return {
    setInstruction: (val: Array<Instruction>) => setInstruction(val),
    getInstruction: getInstruction,
  };
};

export const useGetMyStudyAssignmentById = (
  id: string | number,
): UseQueryResult<TAssignmentResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["mystudy-assignment-get", id],
    queryFn: async () => await assignmentGetRequest(id),
  });

export const useUpdateSubmissionMyStudyAssigment = (
  id: string,
): UseMutationResult<
  TAssignmentResponse,
  TMetaErrorResponse,
  TAssignmentSubmissionPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["update-submission-assignment"],
    mutationFn: async (payload) => await assignmentSubmissionRequest(id, payload),
  });
