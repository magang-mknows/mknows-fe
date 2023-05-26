import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import { BaseLayout, StudyContractModules } from '../../../modules';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { studyContractBreadCumbs } from '../../../modules/administration/constant';

const StudyContractPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb bgColor="bg-white" items={studyContractBreadCumbs} />
      <StudyContractModules />
    </BaseLayout>
  );
};

export default StudyContractPage;
