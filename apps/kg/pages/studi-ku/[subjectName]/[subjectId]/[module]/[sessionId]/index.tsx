import { ReactElement } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { BaseLayout } from "../../../../../../modules/common/layout/base";
import { ModuleMyStudyModule } from "../../../../../../modules/mystudy/module";
import { useMyStudyBreadCrumbsItems } from "../../../../../../modules/mystudy/common/hooks";
import { TuseMyStudyBreadCrumbsItemsProps } from "../../../../../../modules/mystudy/common/types";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";

const MyStudyModulePage: NextPage = (): ReactElement => {
  const router = useRouter();
  const useMyStudyBreadCrumbsItemsProps: TuseMyStudyBreadCrumbsItemsProps = {
    type: "modul",
    sessionId: router.query.sessionId as string,
    subjectName: router.query.subjectName as string,
    subjectId: router.query.subjectId as string,
    competencyName: "Modul",
  };

  const { items } = useMyStudyBreadCrumbsItems(useMyStudyBreadCrumbsItemsProps);

  return (
    <BaseLayout title="Modul Mata Kuliah">
      <BreadCrumb items={items} />
      <ModuleMyStudyModule />
    </BaseLayout>
  );
};

export default MyStudyModulePage;
