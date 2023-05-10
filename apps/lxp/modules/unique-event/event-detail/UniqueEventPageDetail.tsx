'use client';
import { FC, ReactElement } from 'react';
import { UniqueEventBreadCumbs } from '../constant';
// import Breadcums from '../atoms/Breadcums';
// import UniqueEventDetailLoading from '@/modules/unique-event/unique-event-detail/loading';
// import SuspenseError from '@/providers/SuspenseError';

// const EventDetailTab = lazy(() => import('../moleculs/EventDetailTab'));
// const EventDetailBanner = lazy(() => import('../moleculs/EventDetailBanner'));

const UniqueEventDetailPage: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50/60 min-h-[100vh] pb-20 ">
      {/* <SuspenseError loadingFallback={<UniqueEventDetailLoading />}> */}
      <Breadcums items={UniqueEventBreadCumbs} />
      <section className="px-8 md:px-14 lg:px-16">
        <EventDetailBanner />
        <EventDetailTab />
      </section>
      {/* </SuspenseError> */}
    </section>
  );
};

export default UniqueEventDetailPage;
