import { useRecoilState } from "recoil";
import { leaderBoardRankProps } from "./type";
import { LeaderboardRankState, PopupProfilLeaderboard, popupGetUser } from "./store";

type ReturnPopupGetUserTypes = {
  setPopupUser: (val: leaderBoardRankProps) => void;
  getPopupUser: leaderBoardRankProps;
};

export const usePopupGetUser = (): ReturnPopupGetUserTypes => {
  const [get, set] = useRecoilState(popupGetUser);
  return {
    setPopupUser: (val: leaderBoardRankProps) => set(val),
    getPopupUser: get,
  };
};

type ReturnPopupProfilLeaderboardTypes = {
  getPopupLeaderboardStatus: boolean;
  setPopupLeaderboardStatus: (val: boolean) => void;
};

export const usePopupProfilLeaderboard = (): ReturnPopupProfilLeaderboardTypes => {
  const [get, set] = useRecoilState(PopupProfilLeaderboard);
  return {
    getPopupLeaderboardStatus: get,
    setPopupLeaderboardStatus: (val: boolean) => set(val),
  };
};

type leaderBoardRankTypes = {
  setRank: (val: Array<leaderBoardRankProps>) => void;
  getRank: Array<leaderBoardRankProps>;
};

export const useRankLeaderboard = (): leaderBoardRankTypes => {
  const [get, set] = useRecoilState(LeaderboardRankState);
  return {
    setRank: (val: Array<leaderBoardRankProps>) => set(val),
    getRank: get,
  };
};
