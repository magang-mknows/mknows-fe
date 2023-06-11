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
    router,
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
