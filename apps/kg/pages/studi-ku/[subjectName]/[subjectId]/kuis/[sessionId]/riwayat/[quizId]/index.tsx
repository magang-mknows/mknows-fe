import { ReactElement } from "react";
import { QuizHistoryModule } from "../../../../../../../../modules/mystudy/quiz/history";
import { BaseLayout } from "../../../../../../../../modules/common/layout/base";
import { NextPage } from "next";
import { useMyStudyBreadCrumbsItems } from "../../../../../../../../modules/mystudy/common/hooks";
import { TuseMyStudyBreadCrumbsItemsProps } from "../../../../../../../../modules/mystudy/common/types";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { useRouter } from "next/router";
import { ContentFooter } from "../../../../../../../../modules/common";

const MyStudyQuizHistoryPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const useMyStudyBreadCrumbsItemsProps: TuseMyStudyBreadCrumbsItemsProps = {
    type: "kuis",
    competencyDetailsName: "Riwayat",
    router,
  };

  const { items } = useMyStudyBreadCrumbsItems(useMyStudyBreadCrumbsItemsProps);

  return (
    <BaseLayout title="Riwayat Kuis">
      <BreadCrumb items={items} />
      <QuizHistoryModule />
      <ContentFooter />
    </BaseLayout>
  );
};

export default MyStudyQuizHistoryPage;
