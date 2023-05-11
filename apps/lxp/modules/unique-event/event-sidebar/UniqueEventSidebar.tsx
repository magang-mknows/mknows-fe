import { FC, ReactElement } from 'react';
import UniqueSidebarOptions from './options/UniqueSidebarOptions';
import UniqueSidebarHeader from './header/UniqueSidebarHeader';

const UniqueEventSidebar: FC = (): ReactElement => {
  return (
    <section className="col-span-2 lg:col-span-1">
      <UniqueSidebarHeader />
      <UniqueSidebarOptions />
    </section>
  );
};

export default UniqueEventSidebar;
