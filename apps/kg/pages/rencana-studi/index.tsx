import { NextPage } from 'next';
import { ReactElement } from 'react';
import StudyPlan from '../../modules/study-plan/ChoiceFaculty';
import { BaseLayout } from '../../modules/common/layout/base/section';

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Piih Fakultas">
      <StudyPlan />
    </BaseLayout>
  );
};

export default StudyPlanPage;
