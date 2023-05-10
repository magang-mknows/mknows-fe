import { FC, ReactElement } from 'react';
import HeroSection from './section/HeroSection';
import ContentSection from './section/ContentSection';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { myTrainingBreadCumbs } from './constant';
import { ClientProvider } from '../common/provider';

export const MyTrainingModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={myTrainingBreadCumbs} />
      <div className=" w-screen px-8 md:px-14 lg:px-16 py-5">
        <HeroSection />
        <ContentSection />
      </div>
    </ClientProvider>
  );
};
