import { TMetaResponse } from "@mknows-frontend-services/utils";

export type ReturnTypesPopupProfil = {
  getPopupLeaderboardStatus: boolean;
  setPopupLeaderboardStatus: (val: boolean) => void;
};

export type ReturnTypesPopupGetUser = {
  setPopupUser: (val: TLeaderboard) => void;
  getPopupUser: TLeaderboard;
};

type TLeaderboardItem = {
  student_id: string;
  student_name: string;
  subjectCount: string;
  averageScore: number;
  poin: number;
  author: AuthorLeaderboard;
};

type AuthorLeaderboard = {
  avatar: string;
  discussion_likes: number;
  discussion_posted: number;
  full_name: string;
  ipk: number;
  major: string;
  role: string;
  total_certificates: number;
};
export type TLeaderboardResponse = TMetaResponse<TLeaderboardItem>;
