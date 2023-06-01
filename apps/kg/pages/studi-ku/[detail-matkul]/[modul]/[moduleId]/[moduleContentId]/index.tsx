import { ReactElement } from "react";
import { ModuleContentModule } from "../../../../../../modules/mystudy/module/module-content";
import { BaseLayout } from "../../../../../../modules/common/layout/base";
import { NextPage } from "next";

const MyStudyModulePage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Rincian Modul">
      <ModuleContentModule />
    </BaseLayout>
  );
};

export default MyStudyModulePage;
