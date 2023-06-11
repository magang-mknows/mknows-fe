import { NextPage } from "next";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { QuizModule } from "../../../../../../modules/mystudy/quiz";
import { BaseLayout } from "../../../../../../modules/common/layout/base";
import { useMyStudyBreadCrumbsItems } from "../../../../../../modules/mystudy/common/hooks";
import { TuseMyStudyBreadCrumbsItemsProps } from "../../../../../../modules/mystudy/common/types";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";

const MyStudyQuizPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const useMyStudyBreadCrumbsItemsProps: TuseMyStudyBreadCrumbsItemsProps = {
    type: "kuis",
    sessionId: router.query.sessionId as string,
    subjectName: router.query.subjectName as string,
    subjectId: router.query.subjectId as string,
    competencyName: "Quiz",
  };

  const { items } = useMyStudyBreadCrumbsItems(useMyStudyBreadCrumbsItemsProps);

  return (
    <BaseLayout title="Kuis">
      <BreadCrumb items={items} />
      <QuizModule />;
    </BaseLayout>
  );
};

export default MyStudyQuizPage;
