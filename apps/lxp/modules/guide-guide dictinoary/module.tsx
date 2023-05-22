import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import Sidebar from './section/sidebar';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { ClientProvider } from '../common/provider';
import { useRouter } from 'next/router';
import ContentSection from './section/content';
import { LayoutFooter } from '../common/footer/footer-layout';

export const GuideDictinoaryModuleId: NextPage = (): ReactElement => {
  const { query } = useRouter();
  const EndpointBreadCrumb = query.slug;
  const BreadCrumbEndpoint = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Panduan',
      link: '/panduan',
    },
    {
      name: 'Kamus',
      link: '/panduan/kamus',
    },
    {
      name: `${EndpointBreadCrumb}`,
      link: `/panduan/kamus/${EndpointBreadCrumb}`,
    },
  ];

  return (
    <ClientProvider sectionClassName="!bg-[#FAFAFA]">
      <BreadCrumb items={BreadCrumbEndpoint} />
      <div className="w-full flex flex-col-reverse lg:flex-row justify-start px-8 md:px-14 lg:px-16 gap-36">
        <Sidebar />
        <ContentSection />
      </div>
      <LayoutFooter />
    </ClientProvider>
  );
};
