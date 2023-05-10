import { FC, ReactElement } from 'react';
import GuideSection from './guide-section';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { guideBreadCumbs } from '../../administration/constant';
import { BaseLayout } from '../../common';
import { FaqSection } from './faq-section';
import { HeroSection } from './hero-section';

export const GuideHeroModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={guideBreadCumbs} />
      <HeroSection />
      <FaqSection />
      <GuideSection />
    </BaseLayout>
  );
};
