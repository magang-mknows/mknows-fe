import { RegisteredEvent } from '@kg/modules/event/registered-event';
import { EventModule } from '../../../modules/event';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const EventPage: NextPage = (): ReactElement => {
  return <RegisteredEvent />;
};

export default EventPage;
