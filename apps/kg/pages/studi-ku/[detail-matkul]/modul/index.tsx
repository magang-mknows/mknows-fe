import { FC, ReactElement } from 'react';
import { ModuleMyStudyModule } from '../../../../modules/mystudy/module';
import { BaseLayout } from '../../../../modules/common/layout/base';

const MyStudyModulePage: FC = (): ReactElement => {
  return (
    <BaseLayout title="Modul Mata Kuliah">
      <ModuleMyStudyModule />
    </BaseLayout>
  );
};

export default MyStudyModulePage;
