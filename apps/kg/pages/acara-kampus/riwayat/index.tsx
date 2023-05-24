import { BaseLayout } from '@kg/modules';
import { acaraKampusBreadCumbs } from '@kg/modules/administration/constant';
import EventHistory from '@kg/modules/event/event-history';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const EventPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={acaraKampusBreadCumbs} />
      <div className="w-full px-6 md:px-8 lg:px-10">
        <EventHistory />
      </div>
    </BaseLayout>
  );
};

export default EventPage;
