import { FC, ReactElement } from "react";
import { DiscussionMyStudyModule } from "../../../../../modules/mystudy/discussion";
import { BaseLayout } from "../../../../../modules/common/layout/base";
import { useMyStudyBreadCrumbsItems } from "../../../../../modules/mystudy/common/hooks";
import { TuseMyStudyBreadCrumbsItemsProps } from "../../../../../modules/mystudy/common/types";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { useRouter } from "next/router";

const MyStudyDiscussionPage: FC = (): ReactElement => {
  const router = useRouter();
  const useMyStudyBreadCrumbsItemsProps: TuseMyStudyBreadCrumbsItemsProps = {
    sessionId: router.query.sessionId as string,
    subjectName: router.query.subjectName as string,
    subjectId: router.query.subjectId as string,
    competencyName: "Diskusi",
  };

  const { items } = useMyStudyBreadCrumbsItems(useMyStudyBreadCrumbsItemsProps);
  return (
    <BaseLayout title="Diskusi Mata Kuliah">
      <BreadCrumb items={items} />
      <DiscussionMyStudyModule />
    </BaseLayout>
  );
};

export default MyStudyDiscussionPage;
