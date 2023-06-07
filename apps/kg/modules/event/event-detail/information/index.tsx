import { FC, ReactElement } from "react";
import RelatedEvent from "../common/releted-event";

import { EventCard } from '../common/event-card';
import { TEventResponse } from '../types';

export const Information: FC = (): ReactElement => {
  return (
    <div className="grid grid-cols-1 gap-20 lg:grid-cols-3">
      <section className="col-span-2 px">
        <h1 className="mb-5 text-lg text-neutral-900">Detail Acara</h1>
        <EventCard isOrder={true} />
        <EventCard isOrder={false} />
      </section>
      <RelatedEvent />
    </div>
  );
};
