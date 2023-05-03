import React, { FC, ReactElement } from 'react';
import { ClienProvider } from '../common/provider';
import { HeroSection } from './hero';
import { TestimonialsSection } from './testimonials';
import { JobsSection } from './jobs';
import { LayoutFooter } from '../common/footer/footer-layout';

export const AboutModule: FC = (): ReactElement => {
  return (
    <ClienProvider>
      <HeroSection />
      <TestimonialsSection />
      <JobsSection />
      <LayoutFooter />
    </ClienProvider>
  );
};
