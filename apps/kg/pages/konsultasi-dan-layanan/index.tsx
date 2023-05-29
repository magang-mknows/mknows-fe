import { NextPage } from "next";
import { ReactElement } from "react";
import { ConsultationAndServiceModule } from "../../modules/consultasion-and-service";
import { BaseLayout } from "../../modules";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { consultasionService } from "../../modules/consultasion-and-service";

const ConsultationAndServicePage: NextPage = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={consultasionService} />
      <ConsultationAndServiceModule />
    </BaseLayout>
  );
};

export default ConsultationAndServicePage;
