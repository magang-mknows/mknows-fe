import React, { ReactElement } from 'react';
import ContentSection from './content-section';
import { BaseLayout } from '../common';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { leaderBoardBreadCumbs } from '../administration/constant';

const LeaderBoardModules = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={leaderBoardBreadCumbs} />
      <ContentSection />
    </BaseLayout>
  );
};

export default LeaderBoardModules;
