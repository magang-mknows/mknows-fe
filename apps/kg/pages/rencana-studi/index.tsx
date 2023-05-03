import { MaintnenceModule } from '../../modules/common/maintnence';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import StudyPlan from 'apps/kg/modules/study-plan/ChoiceFaculty';
import { BaseLayout } from 'apps/kg/modules';

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <StudyPlan />
    </BaseLayout>
  );
};

export default StudyPlanPage;
