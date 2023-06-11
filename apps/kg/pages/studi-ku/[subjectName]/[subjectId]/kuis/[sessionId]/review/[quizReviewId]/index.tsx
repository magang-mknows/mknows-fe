import { ReactElement } from "react";
import { QuizReviewModule } from "../../../../../../../../modules/mystudy/quiz/review";
import { BaseLayout } from "../../../../../../../../modules/common/layout/base";
import { NextPage } from "next";
import { useMyStudyBreadCrumbsItems } from "../../../../../../../../modules/mystudy/common/hooks";
import { TuseMyStudyBreadCrumbsItemsProps } from "../../../../../../../../modules/mystudy/common/types";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { useRouter } from "next/router";

const MyStudyQuizReviewPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const useMyStudyBreadCrumbsItemsProps: TuseMyStudyBreadCrumbsItemsProps = {
    type: "kuis",
    sessionId: router.query.sessionId as string,
    subjectName: router.query.subjectName as string,
    subjectId: router.query.subjectId as string,
    competencyName: "Kuis",
    competencyDetailsName: "Riwayat",
    competencyDetailsId: router.query.quizReviewId as string,
    edgeName: "Tinjauan",
  };

  const { items } = useMyStudyBreadCrumbsItems(useMyStudyBreadCrumbsItemsProps);

  return (
    <BaseLayout title="Tinjauan Kuis">
      <BreadCrumb items={items} />
      <QuizReviewModule />
    </BaseLayout>
  );
};

export default MyStudyQuizReviewPage;
