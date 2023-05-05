import { TMetaResponse } from "../../services/types";

export type ReturnTypesPopupProfil = {
    getPopupLeaderboardStatus: boolean;
    setPopupLeaderboardStatus: (val: boolean) => void;
  };

export type ReturnTypesPopupGetUser = {
    setPopupUser: (val: TLeaderboard) => void;
    getPopupUser: TLeaderboard;
  };

export type TLeaderboardItem = {
    student_name: string
    subjectCount: string
    averageScore: number
};
export type TLeaderboardResponse = TMetaResponse<TLeaderboard>;

