import { FC, ReactElement } from "react";
import { ClientProvider } from "../common/provider";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { discussionRoomBreadCumbs } from "./const";
import DiscussionHero from "./hero/section";
import { DiscussionContent } from "./content";
import { ContentFooter } from "../common/footer/footer-content";

export const DiscussionRoomModule: FC = (): ReactElement => {
  return (
    <ClientProvider>
      <section className="bg-neutral-100/60 min-h-[100vh] pb-20">
        <BreadCrumb items={discussionRoomBreadCumbs} textColor="text-version2-400" />
        <DiscussionHero />
        <DiscussionContent />
      </section>
      <ContentFooter />
    </ClientProvider>
  );
};
