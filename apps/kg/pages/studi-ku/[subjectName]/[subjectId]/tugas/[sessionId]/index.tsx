import { NextPage } from "next";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import { BaseLayout } from "../../../../../../modules/common";
import { Status } from "../../../../../../modules/mystudy/assignment";
import { useMyStudyBreadCrumbsItems } from "../../../../../../modules/mystudy/common/hooks";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";

const StudyPlanAssigmentPage: NextPage = (): ReactElement => {
  const router = useRouter();
  const { items } = useMyStudyBreadCrumbsItems({ router, competencyDetailsName: "tugas" });

  return (
    <BaseLayout title="Tugas">
      <BreadCrumb items={items} bgColor="bg-white" />
      <Status />
    </BaseLayout>
  );
};

export default StudyPlanAssigmentPage;
