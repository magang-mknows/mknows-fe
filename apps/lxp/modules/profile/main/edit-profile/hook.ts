import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { IUpdateUserPayload, TUpdateUserResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { updateUserData } from "./api";

export const useUpdateUserData = (): UseMutationResult<
  TUpdateUserResponse,
  TMetaErrorResponse,
  IUpdateUserPayload,
  unknown
> =>
  useMutation({
    mutationKey: ["update-user-data-lxp"],
    mutationFn: async (payload) => {
      return await updateUserData(payload);
    },
  });
