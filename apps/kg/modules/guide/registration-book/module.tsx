import { ReactElement } from "react";

import { HeroSection } from "./hero";
import { ContentSection } from "./content";
import { BaseLayout } from "../../common";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { guideRegistrationBreadCumbs } from "./const";
import { AnotherGuideBook } from "./another-guide/anotherGuide";

export const RegistrationGuideBookModule = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={guideRegistrationBreadCumbs} />
      <HeroSection />
      <ContentSection />
      <AnotherGuideBook />
    </BaseLayout>
  );
};
