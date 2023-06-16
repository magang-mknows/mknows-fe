import { NextPage } from "next";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { QuizModule } from "../../../../../../modules/mystudy/quiz";
import { BaseLayout } from "../../../../../../modules/common/layout/base";
import { useMyStudyBreadCrumbsItems } from "../../../../../../modules/mystudy/common/hooks";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";

const MyStudyQuizPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const { items } = useMyStudyBreadCrumbsItems({
    type: "kuis",
    router,
  });

  return (
    <BaseLayout title="Kuis">
      <BreadCrumb items={items} bgColor="bg-white" />
      <QuizModule />
    </BaseLayout>
  );
};

export default MyStudyQuizPage;
