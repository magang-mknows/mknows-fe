import { FC, ReactElement } from "react";
import { HeroSection } from "./hero";
import { ClientProvider } from "../common/provider";
import { PartnerSection } from "./partner";
import { CatalogSection } from "./catalog";
import { BenefitSection } from "./benefit/benefit";
import { ArticleSection } from "./article";
import { OfferSection } from "./offer";
import { LayoutFooter } from "../common/footer/footer-layout";

export const LandingModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <HeroSection />
      <PartnerSection />
      <CatalogSection />
      <BenefitSection />
      <ArticleSection />
      <OfferSection />
      <LayoutFooter />
    </ClientProvider>
  );
};
