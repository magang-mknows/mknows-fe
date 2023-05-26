import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TProfileResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { getProfileMe } from "./api";
import { useNavigate } from "react-router-dom";
import TokenService from "../../../../services/token";

export const useProfile = (): UseQueryResult<TProfileResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ["get-profile"],
    queryFn: async () => await getProfileMe(),
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  return {
    mutate: () => {
      TokenService.removeToken();
      navigate(0);
    },
  };
};
