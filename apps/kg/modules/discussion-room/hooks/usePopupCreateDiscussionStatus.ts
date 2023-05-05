import { useRecoilState } from "recoil";
import { PopupModalCreateDiscussion } from "@/stores/Discussion";

type ReturnTypes = {
  setPopupCreateStatus: (val: boolean) => void;
  getPopupCreateStatus: boolean;
};

export const usePopupCreateDiscussionStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalCreateDiscussion);
  return {
    setPopupCreateStatus: (val: boolean) => set(val),
    getPopupCreateStatus: get,
  };
};
