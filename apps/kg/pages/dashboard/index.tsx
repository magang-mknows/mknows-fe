import { MaintnenceModule } from '../../modules/common/maintnence';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const DashboardPage: NextPage = (): ReactElement => {
  return <MaintnenceModule />;
};

export default DashboardPage;
