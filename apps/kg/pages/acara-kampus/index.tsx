<<<<<<< Updated upstream
import { EventModule } from "../../modules/event";
import { NextPage } from "next";
import { ReactElement } from "react";
=======
import { BaseLayout } from '@kg/modules';
import { acaraKampusBreadCumbs } from '@kg/modules/administration/constant';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { EventList } from '../../modules/event/event-list';
>>>>>>> Stashed changes

const EventPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={acaraKampusBreadCumbs} />
      <div className="w-full px-10 py-10 lg:px-20 bg-neutral-100">
        <EventList />
      </div>
    </BaseLayout>
  );
};

export default EventPage;
