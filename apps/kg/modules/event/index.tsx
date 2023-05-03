import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { FC, ReactElement, useEffect } from 'react';
import { acaraKampusBreadCumbs } from '../administration/constant';
import { BaseLayout } from '../common';
import { EventList } from './event-list';
import { useCreateEvent, useGetEvent, useGetEventById } from './hooks';
import { TEventPayload } from './types';

export const EventModule: FC = (): ReactElement => {
  const payload: TEventPayload = {
    id: '',
    name: 'Event testing',
    registration_close_date: '2023-03-30T13:16:44.162Z',
    date_start: '2023-02-02T13:16:44.163Z',
    date_end: '2023-07-04T13:16:44.163Z',
    description: 'Event test Description',
    capacity: 100,
    thumbnail: 'https://picsum.photos/200/300',
    contact_person_name: 'Contact Person Test',
    contact_person_phone: '08123456889',
    contact_person_email: 'cp@test.com',
    type_order: 'online',
    type_event: 'offline',
  };

  const { data } = useGetEvent();
  const { data: eventById } = useGetEventById(
    'c7d7d0f0-2f1b-4b0a-8a3a-5d5b5c5d5e5f'
  );

  console.log(data);
  console.log('event by id', eventById);
  return (
    <BaseLayout>
      <BreadCrumb items={acaraKampusBreadCumbs} />
      <div className="w-full px-6 md:px-8 lg:px-10">
        <EventList />
      </div>
    </BaseLayout>
  );
};
