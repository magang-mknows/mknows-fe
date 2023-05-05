import api from '../../services/api';
import { TLeaderboardResponse } from './type';

export const leaderboardGetRequest =
  async (): Promise<TLeaderboardResponse> => {
    const { data } = await api.get('/leaderboard');
    return data;
  };
