import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { dataTabelState } from "./stores";
import { Instruction, TAssignmentResponse } from "./type";
import { useRecoilState } from "recoil";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { assignmentGetRequest } from "./api";

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
