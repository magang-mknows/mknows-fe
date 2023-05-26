import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TCertificateResponse } from "./type";
import { certificateGetRequest } from "./api";

export const useGetAllCertificate = (): UseQueryResult<TCertificateResponse> =>
  useQuery({
    queryKey: ["get-all-certificate"],
    queryFn: async () => await certificateGetRequest(),
  });
