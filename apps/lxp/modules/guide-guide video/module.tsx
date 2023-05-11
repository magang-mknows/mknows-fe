import React, { ReactElement } from 'react';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import ContentSection from './section/ContentSection';
import { ClientProvider } from '../common/provider';
import { guideVideoBreadCumbs } from './const';

export const RegistrationVideoModule = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={guideVideoBreadCumbs} />
      <ContentSection />
    </ClientProvider>
  );
};
