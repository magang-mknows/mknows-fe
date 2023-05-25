import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

import { TMajorResponse } from "./types";
import { majorGetByIdRequest } from "./api";

export const useMajorById = (
  id: string | number,
): UseQueryResult<TMajorResponse, TMetaErrorResponse> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ["get-major-by-id", id],
    queryFn: async () => await majorGetByIdRequest(id as string),
  });
};
