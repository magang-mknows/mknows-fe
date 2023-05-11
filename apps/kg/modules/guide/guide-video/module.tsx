import { ReactElement } from 'react';
import { BaseLayout } from '../../common';
import { HeroSection } from './hero';
import { ContentSection } from './content';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { guideVideoBreadCumbs } from './const';

export const GuideVideoModule = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={guideVideoBreadCumbs} />
      <HeroSection />
      <ContentSection />
    </BaseLayout>
  );
};
