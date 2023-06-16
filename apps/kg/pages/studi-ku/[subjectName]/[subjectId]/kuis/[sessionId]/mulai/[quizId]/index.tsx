import { FC, ReactElement } from "react";
import { QuizTakeModule } from "../../../../../../../../modules/mystudy/quiz/take";
import { BaseLayout } from "../../../../../../../../modules/common/layout/base";
import { ContentFooter } from "../../../../../../../../modules/common";

const MyStudyQuizTakePage: FC = (): ReactElement => {
  return (
    <BaseLayout title="Mulai Quiz">
      <QuizTakeModule />
      <ContentFooter />
    </BaseLayout>
  );
};

export default MyStudyQuizTakePage;
