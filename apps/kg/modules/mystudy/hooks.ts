import { useRecoilState } from "recoil";
import { UseQueryResult, useQuery } from "@tanstack/react-query";

// import SubjectService from "@/modules/MyStudy/service";
import { dataCardState } from "./store";
import { Data, DataTypes, TSubjectResponse } from "./typed";

export const useDataCard = (): DataTypes => {
  const [getData, setData] = useRecoilState(dataCardState);
  return {
    setData: (val: Array<Data>) => setData(val),
    getData: getData,
  };
};

// SERVICE API

// export const useGetAllSubject = (): UseQueryResult<TSubjectResponse, unknown> =>
//   useQuery<TSubjectResponse>({
//     queryKey: ["get-all-subject"],
//     queryFn: async () => await SubjectService.GetAllSubject(),
//   });
