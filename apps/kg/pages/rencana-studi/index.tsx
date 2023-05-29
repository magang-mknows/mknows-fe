import { NextPage } from "next";
import { ReactElement } from "react";
import { BaseLayout } from "../../modules";
import { ChoiceFaculty } from "../../modules";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { studyPlanBreadCumbs } from "../../modules/administration/constant";

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Piih Fakultas">
      <BreadCrumb bgColor='bg-white' items={studyPlanBreadCumbs} />
      <ChoiceFaculty />
    </BaseLayout>
  );
};

export default StudyPlanPage;
