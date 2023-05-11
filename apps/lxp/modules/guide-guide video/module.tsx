import React, { ReactElement } from 'react';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import ContentSection from './section/ContentSection';
import { ClientProvider } from '../common/provider';
import { guideVideoBreadCumbs } from './const';
import { ContentFooter } from '../common/footer/footer-content';

export const RegistrationVideoModule = (): ReactElement => {
  return (
    <ClientProvider>
      <BreadCrumb items={guideVideoBreadCumbs} />
      <ContentSection />
      <ContentFooter />
    </ClientProvider>
  );
};
