import { FC, Fragment, ReactElement } from 'react';
import { ContentSection, HeroSection } from './section';
import { BaseLayout } from '../common';

export const DrillSimulasiModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <BaseLayout>
        <div className="px-6 md:px-8 lg:px-10 w-full">
          <HeroSection />
          <ContentSection />
        </div>
      </BaseLayout>
    </Fragment>
  );
};
