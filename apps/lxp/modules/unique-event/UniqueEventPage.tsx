import { useRouter } from 'next/router';
import React, { FC, ReactElement } from 'react';
import { UniqueEventBreadCumbs } from './constant';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import UniqueEventSidebar from './event-sidebar/UniqueEventSidebar';
import UniqueEventSearch from './event-search/UniqueEventSearch';
import UniqueEventContent from './event-content/UniqueEventContent';

export const UniqueEventPage: FC = (): ReactElement => {
  const router = useRouter();
  const pathname = router.asPath;

  const eventPath = [
    '/acara-unik',
    '/acara-unik/terdaftar',
    '/acara-unik/riwayat',
  ];

  if (!eventPath.includes(pathname)) {
    router.push('/acara-unik');
  }

  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20">
      <BreadCrumb items={UniqueEventBreadCumbs} />
      <section className="grid grid-cols-1 gap-20 px-8 lg:grid-cols-3 md:px-14 lg:px-16">
        <UniqueEventSidebar />
        <section className="col-span-2">
          <UniqueEventSearch />
          <UniqueEventContent />
        </section>
      </section>
    </section>
  );
};
