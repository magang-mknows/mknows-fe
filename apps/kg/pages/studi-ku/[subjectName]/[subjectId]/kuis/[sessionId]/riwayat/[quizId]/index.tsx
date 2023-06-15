import { ReactElement } from "react";
import { QuizHistoryModule } from "../../../../../../../../modules/mystudy/quiz/history";
import { BaseLayout } from "../../../../../../../../modules/common/layout/base";
import { NextPage } from "next";
import { useMyStudyBreadCrumbsItems } from "../../../../../../../../modules/mystudy/common/hooks";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { useRouter } from "next/router";
import { ContentFooter } from "../../../../../../../../modules/common";

const MyStudyQuizHistoryPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const { items } = useMyStudyBreadCrumbsItems({
    type: "kuis",
    competencyDetailsName: "Riwayat",
    router,
  });

  return (
    <BaseLayout title="Riwayat Kuis">
      <BreadCrumb items={items} bgColor="bg-white" />
      <QuizHistoryModule />
      <ContentFooter />
    </BaseLayout>
  );
};

export default MyStudyQuizHistoryPage;
