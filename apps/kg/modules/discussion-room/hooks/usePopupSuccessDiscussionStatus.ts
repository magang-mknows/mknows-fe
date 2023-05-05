import { useRecoilState } from "recoil";
import { PopupModalSuccessDiscussion } from "@/stores/Discussion";

type ReturnTypes = {
  setPopupSuccessStatus: (val: boolean) => void;
  getPopupSuccessStatus: boolean;
};

export const usePopupSuccessDiscussionStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalSuccessDiscussion);
  return {
    setPopupSuccessStatus: (val: boolean) => set(val),
    getPopupSuccessStatus: get,
  };
};
