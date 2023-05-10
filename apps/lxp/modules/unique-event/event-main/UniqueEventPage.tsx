'use client';

import { useRouter } from 'next/router';
import React, { FC, ReactElement } from 'react';
import { UniqueEventBreadCumbs } from '../constant';
// import Breadcums from '../atoms/Breadcums';
// import UniqueEventSearch from '../atoms/UniqueEventSearch';
// import UniqueEventSidebar from '../moleculs/UniqueEventSidebar';
// import { useRouter } from 'next/router';
// import SuspenseError from '@/providers/SuspenseError';
// import CardLoading from '@/modules/unique-event/loading/CardLoading';

// const UniqueEventContent = lazy(() => import('../moleculs/UniqueEventContent'));

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
      <Breadcums items={UniqueEventBreadCumbs} />
      <section className="grid grid-cols-1 gap-20 px-8 lg:grid-cols-3 md:px-14 lg:px-16">
        <UniqueEventSidebar />
        <section className="col-span-2">
          <UniqueEventSearch />
          <SuspenseError loadingFallback={<CardLoading />}>
            <UniqueEventContent />
          </SuspenseError>
        </section>
      </section>
    </section>
  );
};
