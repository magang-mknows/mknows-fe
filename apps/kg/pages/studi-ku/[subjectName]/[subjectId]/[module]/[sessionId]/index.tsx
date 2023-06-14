import { ReactElement } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { BaseLayout } from "../../../../../../modules/common/layout/base";
import { ModuleMyStudyModule } from "../../../../../../modules/mystudy/module";
import { useMyStudyBreadCrumbsItems } from "../../../../../../modules/mystudy/common/hooks";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";

const MyStudyModulePage: NextPage = (): ReactElement => {
  const router = useRouter();
  const { items } = useMyStudyBreadCrumbsItems({ router, type: "modul" });

  return (
    <BaseLayout title="Modul">
      <BreadCrumb items={items} bgColor="bg-white" />
      <ModuleMyStudyModule />
    </BaseLayout>
  );
};

export default MyStudyModulePage;
