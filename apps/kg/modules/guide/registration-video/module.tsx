import { ReactElement } from 'react';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { registrationVideoBreadCumbs } from './const';
import { BaseLayout } from '../../common';
import { ContentSection } from './content';

export const RegistrationVideoModule = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={registrationVideoBreadCumbs} />
      <ContentSection />
    </BaseLayout>
  );
};
