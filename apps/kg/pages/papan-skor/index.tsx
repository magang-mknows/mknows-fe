import LeaderBoardModules from 'apps/kg/modules/leaderboard';
import { MaintnenceModule } from '../../modules/common/maintnence';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const LeaderboardPage: NextPage = (): ReactElement => {
  return <LeaderBoardModules />;
};

export default LeaderboardPage;
