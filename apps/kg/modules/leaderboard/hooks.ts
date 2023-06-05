import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";
import { PopupProfilLeaderborad, popupGetUser } from "./store";
import {
  ReturnTypesPopupProfil,
  ReturnTypesPopupGetUser,
  TLeaderboardItem,
  TLeaderboardResponse,
} from "./type";
import { leaderboardGetRequest } from "./api";
import { TFacultyResponse } from "../study-plan/choice-faculty/types";

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

export const useGetFacultyLeaderboard = (id: string): UseQueryResult<TFacultyResponse> =>
  useQuery({
    queryKey: ["get-leaderboard-faculty", id],
    queryFn: async () => await leaderboardGetRequest(),
  });
