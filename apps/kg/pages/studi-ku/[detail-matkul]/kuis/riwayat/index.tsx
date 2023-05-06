import { FC, ReactElement } from 'react';
import { QuizHistoryModule } from '../../../../../modules/mystudy/quiz/history';
import { BaseLayout } from '../../../../../modules/common/layout/base';

const MyStudyQuizHistoryPage: FC = (): ReactElement => {
  return (
    <BaseLayout title="Riwayat Kuis">
      <QuizHistoryModule />
    </BaseLayout>
  );
};

export default MyStudyQuizHistoryPage;
