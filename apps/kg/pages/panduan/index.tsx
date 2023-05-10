import { GuideHeroModule } from 'apps/kg/modules/guide/hero';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const GuidePage: NextPage = (): ReactElement => {
  return <GuideHeroModule />;
};

export default GuidePage;
