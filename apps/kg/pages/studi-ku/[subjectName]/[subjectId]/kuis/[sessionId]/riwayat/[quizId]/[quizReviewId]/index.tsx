import { ReactElement } from "react";
import { QuizReviewModule } from "../../../../../../../../../modules/mystudy/quiz/review";
import { BaseLayout } from "../../../../../../../../../modules/common/layout/base";
import { NextPage } from "next";
import { useMyStudyBreadCrumbsItems } from "../../../../../../../../../modules/mystudy/common/hooks";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { useRouter } from "next/router";
import { ContentFooter } from "../../../../../../../../../modules/common";

const MyStudyQuizReviewPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const { items } = useMyStudyBreadCrumbsItems({
    type: "kuis",
    competencyDetailsName: "riwayat",
    edgeName: "Tinjauan",
    router,
  });

  return (
    <BaseLayout title="Tinjauan Kuis">
      <BreadCrumb items={items} bgColor="bg-white" />
      <QuizReviewModule />
      <ContentFooter />
    </BaseLayout>
  );
};

export default MyStudyQuizReviewPage;
