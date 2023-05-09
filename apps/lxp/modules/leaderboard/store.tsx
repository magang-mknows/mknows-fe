import { atom } from "recoil";
import { leaderBoardRankProps } from "./type";
import Avatar from "/public/assets/leaderboard/avatar.svg";

export const LeaderboardRankState = atom<Array<leaderBoardRankProps>>({
  key: "leaderboard-rank",
  default: [
    {
      id: "1",
      name: "Garnes",
      img: Avatar,
      score: 4900,
    },
    {
      id: "2",
      name: "Alex",
      img: Avatar,
      score: 4100,
    },
    {
      id: "3",
      name: "Adit",
      img: Avatar,
      score: 5000,
    },
    {
      id: "4",
      name: "Garnes",
      img: Avatar,
      score: 4800,
    },
    {
      id: "5",
      name: "Thor",
      img: Avatar,
      score: 5800,
    },
  ],
});

export const popupGetUser = atom<leaderBoardRankProps>({
  key: "popup-get-user",
  default: {
    id: "",
    name: "",
    img: "",
    score: 0,
  },
});

export const PopupProfilLeaderboard = atom({
  key: "modal-popup-profil-leaderboard",
  default: false,
});
