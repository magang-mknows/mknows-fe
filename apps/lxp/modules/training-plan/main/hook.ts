import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TDepartmentResponse } from "./types";
import { getAllDepartments } from "./api";
import { CustomError, TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { useRouter } from "next/router";

export const useGetAllDepartments = (
  keyword: string,
): UseQueryResult<TDepartmentResponse, TMetaErrorResponse> => {
  const router = useRouter();

  return useQuery({
    queryKey: ["get-all-department", keyword],
    queryFn: async () => {
      try {
        await getAllDepartments(keyword);
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
