import { NextPage } from 'next';
import { ReactElement } from 'react';
import { HomePages } from '../../modules/dashboard/module/home';

const DashboardPage: NextPage = (): ReactElement => {
  return <HomePages />;
};

export default DashboardPage;
