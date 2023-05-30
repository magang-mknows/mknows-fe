import { ReactElement } from "react";
import { ModuleMyStudyModule } from "../../../../../modules/mystudy/module";
import { BaseLayout } from "../../../../../modules/common/layout/base";
import { NextPage } from "next";

const MyStudyModulePage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Modul Mata Kuliah">
      <ModuleMyStudyModule />
    </BaseLayout>
  );
};

export default MyStudyModulePage;
