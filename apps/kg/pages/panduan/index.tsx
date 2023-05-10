import { GuideHeroModule } from '../../modules/guide/landing';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const GuidePage: NextPage = (): ReactElement => {
  return <GuideHeroModule />;
};

export default GuidePage;
