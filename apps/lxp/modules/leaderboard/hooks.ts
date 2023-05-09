import { useRecoilState } from 'recoil';
import { leaderBoardRankProps } from './type';
import { PopupProfilLeaderboard, popupGetUser } from './store';

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

export const usePopupProfilLeaderboard =
  (): ReturnPopupProfilLeaderboardTypes => {
    const [get, set] = useRecoilState(PopupProfilLeaderboard);
    return {
      getPopupLeaderboardStatus: get,
      setPopupLeaderboardStatus: (val: boolean) => set(val),
    };
  };
