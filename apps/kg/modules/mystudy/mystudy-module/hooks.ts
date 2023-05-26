import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TMyStudyResponse } from "./types";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { mystudyGetRequest } from "./api";

export const useGetMyStudy = (): UseQueryResult<TMyStudyResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["mystudy-get"],
    queryFn: async () => await mystudyGetRequest(),
  });
