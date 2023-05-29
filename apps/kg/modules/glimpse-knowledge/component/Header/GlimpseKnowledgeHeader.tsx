import { FC, ReactElement } from "react";

export const GlimpseKnowledgeHeader: FC = (): ReactElement => {
  return (
    <header className="flex flex-col items-center justify-center w-full gap-2 pt-20">
      <h1 className="text-3xl font-bold text-neutral-800">Sekilas Ilmu</h1>
      <p className="text-sm text-neutral-700">
        Temukan artikel menarik yang bakal menambah wawasanmu disini!
      </p>
    </header>
  );
};
