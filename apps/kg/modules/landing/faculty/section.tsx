import { FC, ReactElement } from "react";
import { ChoiceFacultyCard } from "./components";
import { CARD } from "./constant";
import { Button } from "@mknows-frontend-services/components/atoms";

export const ChoiceFaculty: FC = (): ReactElement => {
  return (
    <main className="px-[70px] bg-white py-[135px] w-full">
      <section className="flex flex-col gap-y-[44px]">
        <h1 className="text-black font-[700] text-[44px]">3 Pilihan Fakultas</h1>
        <div className="grid grid-cols-3 gap-4 grid-rows-1">
          {CARD.map((card, key) => (
            <ChoiceFacultyCard key={key} {...card} />
          ))}
        </div>
        <div className="flex w-full items-start justify-center">
          <Button
            className="bg-success-500 flex items-center gap-x-4 w-[328px] justify-center text-white font-[700] p-4 rounded-lg"
            type="button"
            href="/fakultas"
          >
            Lihat Semua
          </Button>
        </div>
      </section>
    </main>
  );
};
