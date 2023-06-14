import React, { FC, ReactElement } from "react";
import { EventList } from "./event-list";

export const EventModule: FC = (): ReactElement => {
  return (
    <div className="w-full px-6 md:px-8 lg:px-10">
      <EventList />
    </div>
  );
};
