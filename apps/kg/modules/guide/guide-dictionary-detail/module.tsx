import React, { ReactElement } from 'react';
import { NextPage } from 'next';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { useRouter } from 'next/router';
import { BaseLayout } from '../../../modules/common';
import { ContentSection } from './content';
import { Sidebar } from './sidebar';

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
      link: `/panduan/kamus-kampus-gratis/${EndpointBreadCrumb}`,
    },
  ];

  return (
    <BaseLayout>
      <BreadCrumb items={BreadCrumbEndpoint} />
      <div className="w-full flex flex-col-reverse lg:flex-row justify-start px-8 md:px-14 lg:px-16 gap-36">
        <Sidebar />
        <ContentSection />
      </div>
    </BaseLayout>
  );
};
