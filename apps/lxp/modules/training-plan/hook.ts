import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TCheckWorkPlanStatusResponse } from "./types";
import { CustomError, TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { checkWorkPlanStatus } from "./api";
import { useRouter } from "next/router";

export const useCheckWorkPlanStatus = (): UseQueryResult<
  TCheckWorkPlanStatusResponse,
  TMetaErrorResponse
> => {
  const router = useRouter();

  return useQuery({
    queryKey: ["check-work-plan-status"],
    queryFn: async () => {
      try {
        return await checkWorkPlanStatus();
      } catch (error) {
        const customError = error as CustomError;
        if (customError.response && customError.response.status === 403) {
          router.push("/administrasi");
        } else {
          throw error;
        }
      }
    },
  });
};
