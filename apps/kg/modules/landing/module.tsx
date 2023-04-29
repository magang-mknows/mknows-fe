import { FC, Fragment, ReactElement } from 'react';
import { HeroSection } from './hero';
import { FeatureSection } from './feature';

export const LandingModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroSection />
      <FeatureSection />
    </Fragment>
  );
};
