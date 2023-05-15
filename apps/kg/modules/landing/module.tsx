import { FC, Fragment, ReactElement } from 'react';
import { HeroSection } from './hero';
import { FeatureSection } from './feature';
import { PartnerSection } from './partner';
import { GlimpseModule } from './glimpse';
import { Banner1Module } from './banner';
import { ChoiceFaculty } from './faculty';
import { TestimonySection } from './testimony';

export const LandingModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <HeroSection />
      <FeatureSection />
      <PartnerSection />
      <GlimpseModule />
      <Banner1Module />
      <ChoiceFaculty />
      <TestimonySection />
    </Fragment>
  );
};
