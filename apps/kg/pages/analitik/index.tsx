import { ReactElement } from "react";
import { NextPage } from "next";
import { BaseLayout } from "../../modules/common/layout/base";
import { AnalyticModule } from "../../modules/analytic";

const AnalyticPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Analitik">
      <AnalyticModule />
    </BaseLayout>
  );
};

export default AnalyticPage;
