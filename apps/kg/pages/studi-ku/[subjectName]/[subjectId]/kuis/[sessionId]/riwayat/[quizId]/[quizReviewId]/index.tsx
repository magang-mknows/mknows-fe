import { ReactElement } from "react";
import { QuizReviewModule } from "../../../../../../../../../modules/mystudy/quiz/review";
import { BaseLayout } from "../../../../../../../../../modules/common/layout/base";
import { NextPage } from "next";
import { useMyStudyBreadCrumbsItems } from "../../../../../../../../../modules/mystudy/common/hooks";
import { TuseMyStudyBreadCrumbsItemsProps } from "../../../../../../../../../modules/mystudy/common/types";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { useRouter } from "next/router";
import { ContentFooter } from "../../../../../../../../../modules/common";

const MyStudyQuizReviewPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const useMyStudyBreadCrumbsItemsProps: TuseMyStudyBreadCrumbsItemsProps = {
    type: "kuis",
    competencyDetailsName: "riwayat",
    edgeName: "Tinjauan",
    router,
  };

  const { items } = useMyStudyBreadCrumbsItems(useMyStudyBreadCrumbsItemsProps);

  return (
    <BaseLayout title="Tinjauan Kuis">
      <BreadCrumb items={items} />
      <QuizReviewModule />
      <ContentFooter />
    </BaseLayout>
  );
};

export default MyStudyQuizReviewPage;
