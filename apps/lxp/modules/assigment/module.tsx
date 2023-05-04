import React, { ReactElement } from 'react';
import BannerAssigmentSection from './section/banner/banner';
import AssigmentStatus from './section/content/content';
import { ClientProvider } from '../common/provider';

export const AssigmentModules = (): ReactElement => {
  return (
    <ClientProvider>
      <BannerAssigmentSection />
      <AssigmentStatus />
    </ClientProvider>
  );
};
