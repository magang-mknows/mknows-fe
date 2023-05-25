import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { TFacultyPayload, TFacultyResponse } from "./types";
import { facultyCreateRequest } from "./api";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

export const useCreateFaculty = (): UseMutationResult<
  TFacultyResponse,
  TMetaErrorResponse,
  TFacultyPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["create-faculty"],
    mutationFn: async (payload) => await facultyCreateRequest(payload),
  });
