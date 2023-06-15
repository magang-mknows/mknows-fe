import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { ContactContainer } from "./container";
import { LayoutFooter } from "../common/footer/footer-layout";

export const ContactModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <section className=" bg-neutral-100/70 min-h-[100vh]">
        <ContactContainer />
      </section>
      <LayoutFooter />
    </ClientProvider>
  );
};
