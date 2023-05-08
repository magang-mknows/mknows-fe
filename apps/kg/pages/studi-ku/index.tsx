import { BaseLayout } from '../../modules';
import MyStudy from '../../modules/mystudy';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const MyStudyPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <MyStudy />
    </BaseLayout>
  );
};

export default MyStudyPage;
