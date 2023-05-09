import { NextPage } from 'next';
import { ReactElement } from 'react';
import StudyPlan from '../../modules/study-plan/choice-faculty';
import { BaseLayout } from '../../modules/common/layout/base/section';
import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { studyPlanBreadCumbs } from '../../modules/administration/constant';

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Piih Fakultas">
      <BreadCrumb items={studyPlanBreadCumbs} />
      <StudyPlan />
    </BaseLayout>
  );
};

export default StudyPlanPage;
