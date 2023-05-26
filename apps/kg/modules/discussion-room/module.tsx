import { FC, ReactElement } from "react";
import { BreadCrumb } from "@mknows-frontend-services/components/atoms";
import { discussionRoomBreadCumbs } from "./const";
import DiscussionHero from "./hero/section";
import { DiscussionContent } from "./content";
import { BaseLayout } from "../common";

export const DiscussionRoomModule: FC = (): ReactElement => {
  return (
    <BaseLayout>
      <section className="bg-neutral-100 min-h-[100vh] ">
        <BreadCrumb items={discussionRoomBreadCumbs} textColor="text-version2-400" />
        <DiscussionHero />
        <DiscussionContent />
      </section>
    </BaseLayout>
  );
};
