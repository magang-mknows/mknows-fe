import { useRecoilState } from "recoil";
import { PopupModalEditDiscussion } from "@/stores/Discussion";

type ReturnTypes = {
  setPopupEditStatus: (val: boolean) => void;
  getPopupEditStatus: boolean;
};

export const usePopupEditDiscussionStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalEditDiscussion);
  return {
    setPopupEditStatus: (val: boolean) => set(val),
    getPopupEditStatus: get,
  };
};
