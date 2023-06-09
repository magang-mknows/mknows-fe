import { FC, ReactElement } from "react";

export const SidebarHeader: FC = (): ReactElement => {
  return (
    <header className="flex flex-col items-center justify-center gap-3 mb-16">
      <figure className="bg-neutral-300 h-28 w-28 rounded-full"></figure>
      <section>
        <h1 className="text-base font-bold text-neutral-800 w-full text-center">
          Lori Stevens Lavigne
        </h1>
        <h1 className="text-sm text-neutral-700 w-full text-center">34658202848200091</h1>
      </section>
    </header>
  );
};
