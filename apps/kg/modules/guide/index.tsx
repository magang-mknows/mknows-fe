import React, { FC, ReactElement } from 'react';
import HeroSection from './hero-section';
import FaqSection from './faq-section';
import GuideSection from './guide-section';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { guideBreadCumbs } from '../administration/constant';
import { BaseLayout } from '../common';

export const GuideModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={guideBreadCumbs} />
      <HeroSection />
      <FaqSection />
      <GuideSection />
    </BaseLayout>
  );
};
