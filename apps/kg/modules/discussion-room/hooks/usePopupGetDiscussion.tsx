import { useRecoilState } from "recoil";
import { popupGetUser } from "@/stores/Discussion";
import { TDiscussionItem } from "@/services/Discussion/types";

// import { TLeaderboardResponse } from "@/services/Leaderboard/types";

type ReturnTypes = {
  setPopupUser: (val: TDiscussionItem) => void;
  getPopupUser: TDiscussionItem;
};

export const usePopupGetDiscussion = (): ReturnTypes => {
  const [get, set] = useRecoilState(popupGetUser);
  return {
    setPopupUser: (val: TDiscussionItem) => set(val),
    getPopupUser: get,
  };
};

// type ReturnTypes = {
//   setPopupUser: (val: TLeaderboardResponse) => void;
//   getPopupUser: TLeaderboardResponse;
// };

// export const usePopupGetDiscussion = (): ReturnTypes => {
//   const [get, set] = useRecoilState(popupGetUser);
//   return {
//     setPopupUser: (val: TLeaderboardResponse) => set(val),
//     getPopupUser: get,
//   };
// };
