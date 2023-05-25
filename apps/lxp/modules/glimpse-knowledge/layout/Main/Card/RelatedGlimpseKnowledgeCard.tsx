import { FC, ReactElement } from "react";

export const RelatedGlimpseKnowledgeCard: FC = (): ReactElement => {
  return (
    <section className="py-2">
      <section className="flex items-center gap-2">
        <figure className="flex-shrink-0 w-20 h-24 bg-blue-200 rounded-md"></figure>
        <main>
          <h1 className="pr-10 mb-2 text-sm font-bold">
            Kesalahan para tenaga pengajar baru yang sering dijumpai!
          </h1>
          <section className="flex items-center gap-2">
            <div className="px-4 py-2 text-xs font-bold rounded-md shadow-sm text-neutral-800 bg-secondary-blue-100 w-fit">
              <h1>#softskills</h1>
            </div>{" "}
            <span>|</span> <h1 className="text-xs text-neutral-600">01/04/2023 - 18.42</h1>
          </section>
        </main>
      </section>
    </section>
  );
};
