import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getTakenDepartment } from "./api";
import { CustomError, TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { TTakenDepartmentResponse } from "./types";
import { useRouter } from "next/router";

export const useGetTakenDepartments = (): UseQueryResult<
  TTakenDepartmentResponse,
  TMetaErrorResponse
> => {
  const router = useRouter();

  return useQuery({
    queryKey: ["get-taken-department"],
    queryFn: async () => {
      try {
        return await getTakenDepartment();
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
