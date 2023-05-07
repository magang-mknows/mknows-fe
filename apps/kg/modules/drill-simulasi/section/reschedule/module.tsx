import { FC, ReactElement } from 'react';
import { BaseLayout } from 'apps/kg/modules/common';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { rescheduleBreadCumbs } from './constant';
import { RescheduleContent } from './section/content';

export const RescheduleModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={rescheduleBreadCumbs} />
      <RescheduleContent />
    </BaseLayout>
  );
};
