import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { TUserDetailResponse } from "./types";
import { profileRequest } from "./api";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { useSession } from "next-auth/react";

export const useProfile = (): UseQueryResult<TUserDetailResponse, TMetaErrorResponse> => {
  const { data: session } = useSession();
  return useQuery({
    queryKey: ["get-profile-user"],
    queryFn: async () => await profileRequest(),
    enabled: !!session,
  });
};
