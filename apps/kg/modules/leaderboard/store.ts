import { TLeaderboard } from "@/services/Leaderboard/types";
import { atom } from "recoil";

export const PopupProfilLeaderborad = atom({
  key: "modal-popup-profil-leaderboard",
  default: false,
});

export const popupGetUser = atom<TLeaderboard>({
  key: "popup-get-user",
  default: {
    student_name: "",
    averageScore: 0,
    subjectCount: "",
  },
});