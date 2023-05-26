import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { PopupProfilLeaderborad, popupGetUser } from "./store";
import {
  ReturnTypesPopupProfil,
  ReturnTypesPopupGetUser,
  TLeaderboardItem,
  TLeaderboardResponse,
} from "./type";
import { TMetaErrorResponse } from "@mknows-frontend-services/utils";
import { leaderboardGetRequest } from "./api";

export const usePopupProfilLeaderboard = (): ReturnTypesPopupProfil => {
  const [get, set] = useRecoilState(PopupProfilLeaderborad);
  return {
    getPopupLeaderboardStatus: get,
    setPopupLeaderboardStatus: (val: boolean) => set(val),
  };
};

export const usePopupGetUser = (): ReturnTypesPopupGetUser => {
  const [get, set] = useRecoilState(popupGetUser);
  return {
    setPopupUser: (val: TLeaderboardItem) => set(val),
    getPopupUser: get,
  };
};

export const useGetLeaderboard = (): UseQueryResult<TLeaderboardResponse> =>
  useQuery({
    queryKey: ["get-leaderboard-user"],
    queryFn: async () => await leaderboardGetRequest(),
  });
