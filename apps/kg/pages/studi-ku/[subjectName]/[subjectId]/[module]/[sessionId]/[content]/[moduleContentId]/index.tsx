import { ReactElement } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { ModuleContentModule } from "../../../../../../../../modules/mystudy/module/module-content";
import { BaseLayout } from "../../../../../../../../modules/common/layout/base";
import { useMyStudyBreadCrumbsItems } from "../../../../../../../../modules/mystudy/common/hooks";
import { TuseMyStudyBreadCrumbsItemsProps } from "../../../../../../../../modules/mystudy/common/types";

const MyStudyModulePage: NextPage = (): ReactElement => {
  const router = useRouter();
  const useMyStudyBreadCrumbsItemsProps: TuseMyStudyBreadCrumbsItemsProps = {
    competencyDetailsName: router.query.content as string,
    type: "modul",
    router,
  };

  const { items } = useMyStudyBreadCrumbsItems(useMyStudyBreadCrumbsItemsProps);

  return (
    <BaseLayout title="Rincian Modul">
      <BreadCrumb items={items} bgColor="bg-white" />
      <ModuleContentModule />
    </BaseLayout>
  );
};

export default MyStudyModulePage;
