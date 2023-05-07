import { FC, ReactElement } from 'react';
import { ClientProvider } from '../common/provider';
import { HeroSection } from './hero';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { myTrainingCourseBreadCumbs } from './const';
import { ContentSection } from './content';
import { ContentFooter } from '../common/footer/footer-content';

export const MyTrainingCourseModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb
        items={myTrainingCourseBreadCumbs}
        textColor="text-version2-400"
      />
      <HeroSection />
      <ContentSection />
      <ContentFooter />
    </ClientProvider>
  );
};
