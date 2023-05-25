import React, { ReactElement } from 'react';
import { ClientProvider } from '../common/provider';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { guideDictinoaryBreadCumbs } from './constant';
import Sidebar from './section/sidebar';
import ContentSection from './section/content';
import { LayoutFooter } from '../common/footer/footer-layout';

export const GuideDictinoaryModule = (): ReactElement => {
  return (
    <div>
      <ClientProvider sectionClassName="!bg-[#fff]">
        <BreadCrumb items={guideDictinoaryBreadCumbs} />
        <div className="  flex flex-col-reverse lg:flex-row justify-start px-8 md:px-14 lg:px-16 w-full gap-36">
          <Sidebar />
          <ContentSection />
        </div>
        <LayoutFooter />
      </ClientProvider>
    </div>
  );
};
