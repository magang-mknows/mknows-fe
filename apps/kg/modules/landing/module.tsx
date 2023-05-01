import { FC, Fragment, ReactElement } from 'react';
import { HeroSection } from './hero';
import { FeatureSection } from './feature';
import { PartnerSection } from './partner';
import { GlimpseModule } from './glimpse';

export const LandingModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroSection />
      <FeatureSection />
      <PartnerSection />
      <GlimpseModule />
    </Fragment>
  );
};
