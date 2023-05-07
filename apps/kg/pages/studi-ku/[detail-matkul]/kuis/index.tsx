import { NextPage } from 'next';
import { ReactElement } from 'react';
import { QuizModule } from '../../../../modules/mystudy/quiz';
import { BaseLayout } from '../../../../modules/common/layout/base';

const MyStudyQuizPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Kuis">
      <QuizModule />;
    </BaseLayout>
  );
};

export default MyStudyQuizPage;
