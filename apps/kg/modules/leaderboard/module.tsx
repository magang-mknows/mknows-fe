import React, { ReactElement } from 'react';
import { ContentSection } from './section/module';
import { BaseLayout } from '../common';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { leaderBoardBreadCumbs } from '../administration/constant';

export const LeaderBoardModules = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={leaderBoardBreadCumbs} />
      <ContentSection />
    </BaseLayout>
  );
};
