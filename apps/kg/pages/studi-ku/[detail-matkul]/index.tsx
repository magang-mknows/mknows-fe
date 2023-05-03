import { FC, ReactElement } from 'react';
import { SubjectDetailsModule } from '../../../modules/mystudy/subject-details';
import { BaseLayout } from '../../../modules/common/layout/base';

const SubjectDetailsPage: FC = (): ReactElement => {
  return (
    <BaseLayout title="Dashboard">
      <SubjectDetailsModule />
    </BaseLayout>
  );
};

export default SubjectDetailsPage;
