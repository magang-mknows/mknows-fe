import { useRecoilState } from "recoil";
import { PopupModalReportDiscussion } from "@/stores/Discussion";

type ReturnTypes = {
  setPopupReportStatus: (val: boolean) => void;
  getPopupReportStatus: boolean;
};

export const usePopupReportDiscussionStatus = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalReportDiscussion);
  return {
    setPopupReportStatus: (val: boolean) => set(val),
    getPopupReportStatus: get,
  };
};
