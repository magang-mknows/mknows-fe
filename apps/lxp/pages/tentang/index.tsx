import { AboutModule } from '../../modules/about';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const AboutPage: NextPage = (): ReactElement => {
  return <AboutModule />;
};

export default AboutPage;
