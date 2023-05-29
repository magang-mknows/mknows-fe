import { ReactElement } from "react";
import { QuizHistoryModule } from "../../../../../../../modules/mystudy/quiz/history";
import { BaseLayout } from "../../../../../../../modules/common/layout/base";
import { NextPage } from "next";

const MyStudyQuizHistoryPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Riwayat Kuis">
      <QuizHistoryModule />
    </BaseLayout>
  );
};

export default MyStudyQuizHistoryPage;
