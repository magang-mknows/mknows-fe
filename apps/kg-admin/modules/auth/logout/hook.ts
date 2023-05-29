import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { logoutRequest } from "./api";
import { useSession } from "next-auth/react";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

export const useLogout = (): UseMutationResult<unknown, TMetaErrorResponse, unknown, unknown> => {
  const { data } = useSession();
  const refreshToken = data?.user?.token?.refresh_token as string;
  return useMutation({
    mutationKey: ["logout-request"],
    mutationFn: async () => logoutRequest({ refresh_token: refreshToken }),
  });
};
