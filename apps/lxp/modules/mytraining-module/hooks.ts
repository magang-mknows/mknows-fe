import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getMyWorkModule } from "./api";
import { TMyTrainingModuleResponse } from "./type";

export const useGetMyWorkModule = (
  sessionID: string,
  batchID: string,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", sessionID, batchID],
    queryFn: async () => await getMyWorkModule(sessionID, batchID),
  });
