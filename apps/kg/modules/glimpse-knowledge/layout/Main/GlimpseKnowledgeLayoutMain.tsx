import React, { FC, ReactElement } from "react";
import { RelatedGlimpseKnowledgeCard } from "./Card/RelatedGlimpseKnowledgeCard";

export const GlimpseKnowledgeLayoutMain: FC = (): ReactElement => {
  return (
    <main className="grid grid-cols-3 px-8 md:px-14 lg:px-16">
      <section className="col-span-3 lg:col-span-2"></section>
      <section className="col-span-3 lg:col-span-1">
        <h1 className="font-bold">Lainnya dari Sekilas Ilmu</h1>
        <span className="h-2 w-24 bg-[#0B568D] block rounded-md mb-4"></span>
        {[...Array(5)].map((item, index) => {
          return <RelatedGlimpseKnowledgeCard key={index} />;
        })}
      </section>
    </main>
  );
};
