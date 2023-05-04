import { EventModule } from '../../modules/event';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const EventPage: NextPage = (): ReactElement => {
  return <EventModule />;
};

export default EventPage;
