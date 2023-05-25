import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TSubjectDetailsResponse } from "./type";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { subjectDetailsGetRequest } from "./api";

export const useGetSubjectDetailsById = (
  id: string | string,
): UseQueryResult<TSubjectDetailsResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ["subject-details-get", id],
    queryFn: async () => await subjectDetailsGetRequest(id),
  });
