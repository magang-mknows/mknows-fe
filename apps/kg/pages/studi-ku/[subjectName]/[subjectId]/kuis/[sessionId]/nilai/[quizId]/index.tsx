import { FC, ReactElement } from "react";
import { QuizScoreModule } from "../../../../../../../../modules/mystudy/quiz/score";
import { BaseLayout } from "../../../../../../../../modules/common/layout/base";
import { useMyStudyBreadCrumbsItems } from "../../../../../../../../modules/mystudy/common/hooks";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { useRouter } from "next/router";
import { ContentFooter } from "../../../../../../../../modules/common";

const MyStudyQuizScorePage: FC = (): ReactElement => {
  const router = useRouter();
  const { items } = useMyStudyBreadCrumbsItems({
    type: "kuis",
    competencyDetailsName: "nilai",
    router,
  });

  return (
    <BaseLayout title="Nilai Kuis">
      <BreadCrumb items={items} bgColor="bg-white" />
      <QuizScoreModule />
      <ContentFooter />
    </BaseLayout>
  );
};

export default MyStudyQuizScorePage;
