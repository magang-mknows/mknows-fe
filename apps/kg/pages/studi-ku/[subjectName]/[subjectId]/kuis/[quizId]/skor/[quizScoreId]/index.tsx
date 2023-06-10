import { FC, ReactElement } from "react";
import { QuizScoreModule } from "../../../../../../../../modules/mystudy/quiz/score";
import { BaseLayout } from "../../../../../../../../modules/common/layout/base";

const MyStudyQuizScorePage: FC = (): ReactElement => {
  return (
    <BaseLayout title="Nilai Kuis">
      <QuizScoreModule />
    </BaseLayout>
  );
};

export default MyStudyQuizScorePage;
