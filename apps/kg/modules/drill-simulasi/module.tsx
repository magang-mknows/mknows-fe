import { FC, Fragment, ReactElement } from 'react';
import { ContentSection, HeroSection } from './section';
import { BaseLayout } from '../common';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { drillSimulasionBreadCumbs } from './constant';

export const DrillSimulasiModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <BaseLayout>
        <BreadCrumb items={drillSimulasionBreadCumbs} bgColor="bg-white" />
        <div className="px-6 md:px-8 lg:px-10 w-full">
          <HeroSection />
          <ContentSection />
        </div>
      </BaseLayout>
    </Fragment>
  );
};
