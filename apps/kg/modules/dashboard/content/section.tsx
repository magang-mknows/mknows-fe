import { FC, ReactElement } from "react";
import { TaskSection } from "./task-event/task";
import { EventSection } from "./task-event/event";
import { ProgressSection } from "./progress";
import { CalendarSection } from "./calendar";

export const ContentSection: FC = (): ReactElement => {
  return (
    <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
      <div className="flex gap-y-6 gap-x-3 w-full flex-wrap lg:flex-nowrap mb-6">
        <TaskSection />
        <EventSection />
      </div>
      <ProgressSection />
      <CalendarSection />
    </div>
  );
};
