import { FC, ReactElement } from 'react';
import { BannerSection, ContentSection } from './section';
import { BaseLayout } from '../common';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { assignmentBreadCumbs } from './constanta';

export const AssignmentModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={assignmentBreadCumbs} />
      <BannerSection />
      <ContentSection session_id={''} />
    </BaseLayout>
  );
};
