import { params } from "../type";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { getMyWorkVideoModule } from "../api";
import { TMyTrainingModuleResponse } from "../../mytraining-module/type";

// type MytrainingVideo = {
//   setGuideVideo: (val: Array<videoMytrainingTypes>) => void;
//   getGuideVideo: Array<videoMytrainingTypes>;
// };

// export const useMytrainingVideo = (): MytrainingVideo => {
//   const [get, set] = useRecoilState(videoGuideState);
//   return {
//     setGuideVideo: (val: Array<videoMytrainingTypes>) => set(val),
//     getGuideVideo: get,
//   };
// };

export const useGetMyWorkVideoModule = (
  params: params,
): UseQueryResult<TMyTrainingModuleResponse, unknown> =>
  useQuery<TMyTrainingModuleResponse>({
    queryKey: ["get-subject-by-dept-id", params],
    queryFn: async () => await getMyWorkVideoModule(params),
  });
