import { NextPage } from "next";
import { ReactElement } from "react";
import { DistributionOfWorkModule } from "../../modules";
import { BaseLayout } from "../../modules";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { distributionService } from "../../modules";

const DistributionOfWorkPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={distributionService} />
      <DistributionOfWorkModule />
    </BaseLayout>
  );
};

export default DistributionOfWorkPage;
