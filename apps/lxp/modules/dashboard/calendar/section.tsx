import { FC, ReactElement } from 'react';
import { CalendarHeader } from './header';
import { CalendarMain } from './main';

export const CalendarSection: FC = (): ReactElement => {
  return (
    <section className="w-full text-neutral-900 bg-neutral-50 shadow-sm h-fit px-7 py-12 rounded-md">
      <CalendarHeader />
      <CalendarMain />
    </section>
  );
};
