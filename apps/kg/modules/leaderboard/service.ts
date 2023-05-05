import { handleError } from "@/utilities/helper";
import ApiService from "../../services/Api/index";
import { TLeaderboardResponse } from "./type";

const LeaderboardService = {
  GetAllLeaderboard: async (): Promise<TLeaderboardResponse> => {
    const requestData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      url: "/leaderboard",
    };
    try {
      const res = await ApiService.customRequest(requestData);

      return res.data;
    } catch (error) {
      throw handleError(error);
    }
  },
};

export default LeaderboardService;
