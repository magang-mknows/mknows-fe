import { FC, ReactElement } from "react";
import { ArticleCard } from "./components";
import { CARD } from "./constant";
import { Button } from "@mknows-frontend-services/components/atoms";

export const Article: FC = (): ReactElement => {
  return (
    <main className="px-[70px] bg-white py-[135px] w-full">
      <section className="flex flex-col gap-y-[90.94px]">
        <div className="flex w-full flex-col justify-center items-center">
          <h1 className="text-black font-[700] text-[44px]">Sekilas Ilmu</h1>
          <p className="text-black text-[28px] font-[500]">Informasi untuk membangun karirmu</p>
        </div>
        <div className="grid grid-cols-3 gap-[42px] grid-rows-1">
          {CARD.map((card, key) => (
            <ArticleCard key={key} {...card} />
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
