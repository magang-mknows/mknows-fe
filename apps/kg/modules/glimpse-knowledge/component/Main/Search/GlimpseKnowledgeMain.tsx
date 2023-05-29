import { FC, ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";

export const GlimpseKnowledgeSearch: FC = (): ReactElement => {
  return (
    <div className="flex items-center gap-4 px-4 py-4 md:px-6">
      <AiOutlineSearch className="text-xl text-neutral-400" />
      <input
        type={"text"}
        className="w-full text-sm bg-neutral-100 text-neutral-700 focus:outline-none"
        placeholder="Cari Mata Kuliah"
      />
    </div>
  );
};
