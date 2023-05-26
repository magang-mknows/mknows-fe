import { BreadCrumb } from '@mknows-frontend-services/components/atoms';
import DetailContract from '../../../../modules/study-contract/details';
import { NextPage } from 'next';
import { ReactElement } from 'react';
import { studyContractBreadCumbs } from '../../../../modules/administration/constant';
import { BaseLayout } from '../../../../modules/common';

const StudyContractDetailPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb bgColor='bg-white' items={studyContractBreadCumbs} />
      <DetailContract />
    </BaseLayout>
  );
};

export default StudyContractDetailPage;
