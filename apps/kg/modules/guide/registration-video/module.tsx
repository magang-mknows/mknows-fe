import { ReactElement } from "react";
import { registrationVideoBreadCumbs } from "./const";
import { BaseLayout } from "../../common";
import { ContentSection } from "./content";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";

export const RegistrationVideoModule = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={registrationVideoBreadCumbs} />
      <ContentSection />
    </BaseLayout>
  );
};
