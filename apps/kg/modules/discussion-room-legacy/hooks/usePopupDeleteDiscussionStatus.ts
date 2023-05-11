import { useRecoilState } from "recoil";
import { PopupModalDeleteDiscussion } from "../stores";

type ReturnTypes = {
  setPopupDeleteStatus: (val: boolean) => void;
  getPopupDeleteStatus: boolean;
};

export const usePopupDeleteDiscussionStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalDeleteDiscussion);
  return {
    setPopupDeleteStatus: (val: boolean) => set(val),
    getPopupDeleteStatus: get,
  };
};
