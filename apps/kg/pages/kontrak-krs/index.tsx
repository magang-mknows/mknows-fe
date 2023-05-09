import { StudyContractModules } from '../../modules';
import { MaintnenceModule } from '../../modules/common/maintnence';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const StudyContractPage: NextPage = (): ReactElement => {
  return <StudyContractModules />;
};

export default StudyContractPage;