import api from "../../services/api";
import { TFacultyResponse } from "../study-plan/choice-faculty/types";
import { TLeaderboardResponse } from "./type";

export const leaderboardGetRequest = async (): Promise<TLeaderboardResponse> => {
  const { data } = await api.get("/leaderboard");
  return data;
};

export const leaderboardGetFaculty = async (id: string): Promise<TFacultyResponse> => {
  const { data } = await api.get(`/leaderboard/faculty/${id}`);
  return data;
};
