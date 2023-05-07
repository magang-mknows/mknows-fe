import { FC, ReactElement } from 'react';
import { QuizTakeModule } from '../../../../../modules/mystudy/quiz/take';
import { BaseLayout } from '../../../../../modules/common/layout/base';

const MyStudyQuizTakePage: FC = (): ReactElement => {
  return (
    <BaseLayout title="Kuis dimulai">
      <QuizTakeModule />
    </BaseLayout>
  );
};

export default MyStudyQuizTakePage;
