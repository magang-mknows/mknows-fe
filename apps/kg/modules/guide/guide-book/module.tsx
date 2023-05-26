import { ReactElement } from "react";
import { ContentSection } from "./content/content";
import { HeroSection } from "./hero/hero";
import { BaseLayout } from "../../common";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { guideBookBreadCumbs } from "./const";

export const GuideBookModule = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={guideBookBreadCumbs} />
      <HeroSection />
      <ContentSection />
    </BaseLayout>
  );
};
