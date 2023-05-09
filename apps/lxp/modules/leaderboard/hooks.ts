import { useRecoilState } from 'recoil';
import { leaderBoardRankProps } from './type';
import { popupGetUser } from './store';

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
