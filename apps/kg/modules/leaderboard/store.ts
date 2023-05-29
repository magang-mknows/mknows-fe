import { atom } from "recoil";
import { TLeaderboardItem } from "./type";

export const PopupProfilLeaderborad = atom({
  key: "modal-popup-profil-leaderboard",
  default: false,
});

export const popupGetUser = atom<TLeaderboardItem>({
  key: "popup-get-user-2",
  default: {
    student_id: "",
    student_name: "",
    subjectCount: "",
    averageScore: 0,
    poin: "",
    author: {
      avatar: "",
      discussion_likes: 0,
      discussion_posted: 0,
      full_name: "",
      ipk: 0,
      major: "",
      poin: "",
      role: "",
      total_certificates: 0,
    },
  },
});
