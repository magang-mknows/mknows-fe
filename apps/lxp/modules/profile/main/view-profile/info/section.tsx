import { FC, ReactElement } from "react";
import { AiTwotoneCopy } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { TViewProfilInfoProps } from "./types";

export const ViewProfilInfo: FC<TViewProfilInfoProps> = ({
  full_name,
  user_administration,
  batch,
}): ReactElement => {
  return (
    <section className="w-full  -mt-8 pl-2">
      <header className="w-full flex justify-between flex-wrap">
        <h1 className="text-base font-bold text-neutral-800">{full_name}</h1>
        <section className="flex items-center gap-2 text-sm text-neutral-500">
          <AiTwotoneCopy className="text-xl cursor-pointer" />
          <p>{user_administration?.employee_id_number}</p>
        </section>
      </header>
      <main className="w-full flex gap-0 items-center">
        <h1 className="text-neutral-500 text-sm">{user_administration?.type}</h1>
        <BsDot className="text-version2-400 text-2xl" />
        <h1 className="text-neutral-500 text-sm">Batch {batch}</h1>
      </main>
      <footer className="w-full flex gap-0 items-center">
        <h1 className="text-neutral-600 text-base">{user_administration?.department}</h1>
        <BsDot className="text-version2-400 text-2xl" />
        <h1 className="text-neutral-600 text-base">Blokchain</h1>
      </footer>
    </section>
  );
};
