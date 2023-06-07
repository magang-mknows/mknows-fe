import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";

import { TContractResponse } from "./types";
import { contractGetByIdRequest } from "./api";

export const useContractById = (
  id: string | number,
): UseQueryResult<TContractResponse, TMetaErrorResponse> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ["get-contract-by-id", id],
    queryFn: async () => await contractGetByIdRequest(id as string),
  });
};
