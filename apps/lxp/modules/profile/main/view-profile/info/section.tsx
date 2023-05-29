import { FC, ReactElement } from "react";
import { AiTwotoneCopy } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

export const ViewProfilInfo: FC = (): ReactElement => {
  return (
    <section className="w-full mt-16 pl-2">
      <header className="w-full flex justify-between flex-wrap">
        <h1 className="text-base font-bold text-neutral-800">Bandi Aljabar</h1>
        <section className="flex items-center gap-2 text-sm text-neutral-500">
          <AiTwotoneCopy className="text-xl cursor-pointer" />
          <p>214907891</p>
        </section>
      </header>
      <main className="w-full flex gap-0 items-center">
        <h1 className="text-neutral-500 text-sm">Mahasiswa</h1>
        <BsDot className="text-version2-400 text-2xl" />
        <h1 className="text-neutral-500 text-sm">Semester 1</h1>
      </main>
      <footer className="w-full flex gap-0 items-center">
        <h1 className="text-neutral-600 text-base">FK. Teknologi Ekonomi Digital</h1>
        <BsDot className="text-version2-400 text-2xl" />
        <h1 className="text-neutral-600 text-base">Blokchain</h1>
      </footer>
    </section>
  );
};
