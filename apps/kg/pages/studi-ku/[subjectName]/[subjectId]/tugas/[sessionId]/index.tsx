import { NextPage } from "next";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { BaseLayout } from "../../../../../../modules/common";
import { Status } from "../../../../../../modules/mystudy/assignment";
import { useMyStudyBreadCrumbsItems } from "../../../../../../modules/mystudy/common/hooks";
import { TuseMyStudyBreadCrumbsItemsProps } from "../../../../../../modules/mystudy/common/types";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";

const StudyPlanAssigmentPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const useMyStudyBreadCrumbsItemsProps: TuseMyStudyBreadCrumbsItemsProps = {
    sessionId: router.query.sessionId as string,
    subjectName: router.query.subjectName as string,
    subjectId: router.query.subjectId as string,
    competencyName: "Tugas",
  };

  const { items } = useMyStudyBreadCrumbsItems(useMyStudyBreadCrumbsItemsProps);

  return (
    <BaseLayout title="Tugas">
      <BreadCrumb items={items} />
      <Status />;
    </BaseLayout>
  );
};

export default StudyPlanAssigmentPage;
