import { FC, lazy, ReactElement } from 'react';
import { ContentSection } from './section/content';
import { SidebarSection } from './section/sidebar';

const Discussion: FC = (): ReactElement => {
  return (
    <div className="w-full flex md:flex-row flex-col gap-10 px-6 md:px-8 lg:px-10 py-10 bg-[#FAFAFA] dark:bg-[#222529]">
      <div className="md:basis-3/12 ">
        <SidebarSection />
      </div>
      <div>
        <ContentSection />
      </div>
    </div>
  );
};

export default Discussion;
