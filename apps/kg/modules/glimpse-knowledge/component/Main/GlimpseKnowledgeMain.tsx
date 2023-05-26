import { FC, ReactElement } from "react";
import { GlimpseKnowledgeCard } from "./Card/GlimpseKnowledgeCard";
import { GlimpseKnowledgeSearch } from "./Search/GlimpseKnowledgeMain";

export const GlimpseKnowledgeMain: FC = (): ReactElement => {
  return (
    <main className="px-8 pb-20 md:px-14 lg:px-16">
      <section className="bg-neutral-100 h-[56px] mb-14 mt-10 w-full rounded-md shadow-sm">
        <GlimpseKnowledgeSearch />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* <SuspenseError loadingFallback={<CardLoading />}> */}
        <GlimpseKnowledgeCard />
        {/* </SuspenseError> */}
      </section>
    </main>
  );
};
