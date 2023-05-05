import { FC, ReactElement } from 'react';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { BaseLayout } from '../common';
import HeroSection from './hero-section';
import Content from './content';
import { discussionRoomBreadCumbs } from '../administration/constant';

const DiscussionModules: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={discussionRoomBreadCumbs} />
      <div className="bg-neutral-100  dark:bg-[#222529] w-full min-h-screen px-6 md:px-8 lg:px-10 mb-20 py-10 lg:py-0">
        <HeroSection />
        <Content />
      </div>
    </BaseLayout>
  );
};

export default DiscussionModules;
