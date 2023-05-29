import { FC, ReactElement } from "react";
import { ModuleContentModule } from "../../../../../modules/mystudy/module/module-content";
import { BaseLayout } from "../../../../../modules/common/layout/base";

const MyStudyModulePage: FC = (): ReactElement => {
  return (
    <BaseLayout title="Rincian Modul">
      <ModuleContentModule />
    </BaseLayout>
  );
};

export default MyStudyModulePage;
