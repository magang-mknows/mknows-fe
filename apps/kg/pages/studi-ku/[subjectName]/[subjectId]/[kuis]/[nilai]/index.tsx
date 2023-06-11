import { FC, ReactElement } from "react";
import { QuizScoreModule } from "../../../../../../modules/mystudy/quiz/score";
import { BaseLayout } from "../../../../../../modules/common/layout/base";
import { useMyStudyBreadCrumbsItems } from "../../../../../../modules/mystudy/common/hooks";
import { TuseMyStudyBreadCrumbsItemsProps } from "../../../../../../modules/mystudy/common/types";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { useRouter } from "next/router";

const MyStudyQuizScorePage: FC = (): ReactElement => {
  const router = useRouter();
  const useMyStudyBreadCrumbsItemsProps: TuseMyStudyBreadCrumbsItemsProps = {
    type: "kuis",
    sessionId: router.query.sessionId as string,
    subjectName: router.query.subjectName as string,
    subjectId: router.query.subjectId as string,
    competencyName: "Kuis",
    competencyDetailsName: "Nilai",
  };

  const { items } = useMyStudyBreadCrumbsItems(useMyStudyBreadCrumbsItemsProps);

  return (
    <BaseLayout title="Nilai Kuis">
      <BreadCrumb items={items} />
      <QuizScoreModule />
    </BaseLayout>
  );
};

export default MyStudyQuizScorePage;
