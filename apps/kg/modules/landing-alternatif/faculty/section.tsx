import { FC, ReactElement } from "react";
import { ChoiceFacultyCard } from "./components";
import { CARD } from "./constant";

export const FacultyAlternatif: FC = (): ReactElement => {
  return (
    <main className="px-[80px] bg-white py-[40px] w-full">
      <section className="lg:flex hidden flex-col gap-y-[20px]">
        <h1 className="absolte z-40 text-black font-[700] text-[36px]">Pilihan Fakultas</h1>
        <div className="flex absolute z-0 pt-6">
          <svg
            width="317"
            height="43"
            viewBox="0 0 317 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.2391 0.2102C0.541931 1.03434 -1.46161 2.18797 3.54703 8.28659C9.05647 15.0445 20.5765 16.6933 110.064 19.4954C6.71924 21.4731 -2.79732 23.7807 1.37654 31.5276C6.71908 41.2524 40.9448 40.2635 207.565 40.5931C257.484 40.758 285.199 43.56 299.39 42.9007C319.091 41.9118 314.249 34.3297 306.068 30.8683L310.576 30.0442C322.43 27.9014 315.251 14.3857 300.058 10.4298C286.701 6.96847 209.902 3.34192 135.942 2.68261C38.1067 2.0233 38.4406 -0.778766 18.2391 0.2102Z"
              fill="#FBCB50"
            />
          </svg>
        </div>
        <p>Tersedia 3 fakultas unggulan Kampus Gratis </p>
        <div className="grid grid-cols-3 gap-[82px] grid-rows-1">
          {CARD.map((card, key) => (
            <ChoiceFacultyCard key={key} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
};
