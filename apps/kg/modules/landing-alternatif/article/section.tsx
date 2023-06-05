import { FC, ReactElement } from "react";
import { ChoiceFacultyCard } from "./components";
import { CARD } from "./constant";
import { Button } from "@mknows-frontend-services/components/atoms";

export const ArticleAlternatif: FC = (): ReactElement => {
  return (
    <main className="px-[80px] bg-white py-[135px] w-full">
      <section className="lg:flex hidden flex-col gap-y-[20px]">
        <div className="grid grid-cols-4 gap-[55px] grid-rows-1">
          {CARD.map((card, key) => (
            <ChoiceFacultyCard key={key} {...card} />
          ))}
        </div>
        <div className="flex w-full justify-center items-center pt-8">
          <Button
            type="button"
            href="/"
            className="hover:bg-yellow-300 bg-yellow-500 text-white font-[700] p-3 rounded-lg w-[328px]"
          >
            Lihat Semua
          </Button>
        </div>
      </section>
    </main>
  );
};
