import { FC, ReactElement } from "react";
import { GuideSection } from "./guide/guide";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { BaseLayout } from "../../common";
import { FaqSection } from "./faq/faq";
import { HeroSection } from "./hero/hero";
import { guideBreadCumbs } from "./const";

export const GuideHeroModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <BreadCrumb items={guideBreadCumbs} />
      <HeroSection />
      <FaqSection />
      <GuideSection />
    </BaseLayout>
  );
};
