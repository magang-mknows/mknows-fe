import { FC, Fragment, ReactElement } from 'react';
import HeroSection from './section/HeroSection';
import ContentSection from './section/ContentSection';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { myTrainingBreadCumbs } from './constant';

export const MyTrainingModule: FC = (): ReactElement => {
  return (
    <Fragment>
      <BreadCrumb items={myTrainingBreadCumbs} />
      <div className=" w-screen px-8 md:px-14 lg:px-16 py-5">
        <HeroSection />
        <ContentSection />
      </div>
    </Fragment>
  );
};
