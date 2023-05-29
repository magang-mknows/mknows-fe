import React, { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { HeroSection } from "./hero";
import { TestimonialsSection } from "./testimonials";
import { JobsSection } from "./jobs";
import { LayoutFooter } from "../common/footer/footer-layout";

export const AboutModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <HeroSection />
      <TestimonialsSection />
      <JobsSection />
      <LayoutFooter />
    </ClientProvider>
  );
};
