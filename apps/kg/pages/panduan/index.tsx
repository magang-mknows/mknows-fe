import { GuideModule } from '../../modules/guide';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const GuidePage: NextPage = (): ReactElement => {
  return <GuideModule />;
};

export default GuidePage;
