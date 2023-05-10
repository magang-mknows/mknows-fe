import React, { ReactElement } from 'react';
import { ContentSection } from './section/ContentSection';
import { ClientProvider } from '../common/provider';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { leaderBoardBreadCumbs } from './type.d';


export const LeaderBoardModule = (): ReactElement => {
  return (
    <ClientProvider className="!bg-[#FAFAFA]">
      <BreadCrumb items={leaderBoardBreadCumbs} />
      <ContentSection />
    </ClientProvider>
  );
};
