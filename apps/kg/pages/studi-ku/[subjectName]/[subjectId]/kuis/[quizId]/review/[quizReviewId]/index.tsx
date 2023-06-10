import { ReactElement } from "react";
import { QuizReviewModule } from "../../../../../../../../modules/mystudy/quiz/review";
import { BaseLayout } from "../../../../../../../../modules/common/layout/base";
import { NextPage } from "next";

const MyStudyQuizReviewPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Tinjauan Kuis">
      <QuizReviewModule />
    </BaseLayout>
  );
};

export default MyStudyQuizReviewPage;
