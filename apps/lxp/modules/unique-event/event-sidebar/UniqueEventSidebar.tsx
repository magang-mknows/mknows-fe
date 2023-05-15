import { FC, ReactElement } from 'react';
import { UniqueSidebarHeader } from './header';
import { UniqueSidebarOptions } from './options';

export const UniqueEventSidebar: FC = (): ReactElement => {
  return (
    <section className="col-span-2 lg:col-span-1">
      <UniqueSidebarHeader />
      <UniqueSidebarOptions />
    </section>
  );
};
