import { FC, Fragment, ReactElement } from 'react';
import { HeroSection } from './hero';
import { FeatureSection } from './feature';
import { PartnerSection } from './partner';
import { GlimpseModule } from './glimpse';
import { Banner1Module } from './banner';

export const LandingModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroSection />
      <FeatureSection />
      <PartnerSection />
      <GlimpseModule />
      <Banner1Module />
    </Fragment>
  );
};
