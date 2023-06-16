import { atom } from "recoil";
import { TMyStudyAssignmentItem } from "./type";

export const mystudyAssignmentState = atom<TMyStudyAssignmentItem | null>({
  key: "mystudy-assignment-state",
  default: null,
});
