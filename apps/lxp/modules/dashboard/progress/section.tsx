import { FC, useState } from "react";

import { VscTriangleUp } from "react-icons/vsc";
import { ProgressCard } from "./card";
import { TProgressProps } from "./types";

export const ProgressSection: FC<TProgressProps> = ({ items }) => {
  const [isViewMore, setViewMore] = useState<boolean>(false);
  return (
    <section className="bg-neutral-50 w-full px-6 py-4 rounded-md mb-10">
      <h1 className="font-semibold text-lg  mb-1 text-neutral-900">Lanjutkan Pelatihan Kamu</h1>
      <p className="text-neutral-400 text-xs mb-6">Batch I</p>
      <section>
        {items?.slice(0, !isViewMore ? 3 : 10)?.map((item, index) => (
          <ProgressCard {...item} key={index} />
        ))}
      </section>
      <section className="w-full text-neutral-500 gap-2 py-4 justify-center flex-col flex items-center">
        <h1 className="text-sm">{!isViewMore ? "Lihat Semua" : "Ke Halaman Penugasan"}</h1>
        <VscTriangleUp
          className={`${isViewMore ? "rotate-0" : "rotate-180"} text-lg cursor-pointer`}
          onClick={() => {
            setViewMore(!isViewMore);
          }}
        />
      </section>
    </section>
  );
};
