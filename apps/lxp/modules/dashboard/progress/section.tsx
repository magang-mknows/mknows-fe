import React, { useState } from "react";

import { VscTriangleUp } from "react-icons/vsc";
import { ProgressCard } from "./card";

export const ProgressSection = () => {
  const [isViewMore, setViewMore] = useState<boolean>(false);

  const dummyProgress = [
    {
      topic: "Pelatihan Keterampilan Komunikasi",
      milestone: "Batch 1",
      title: "Pelatihan Keterampilan Interpersonal",
      totalClass: 14,
      classAttended: 5,
    },
    {
      topic: "Pelatihan Keterampilan Komunikasi",
      milestone: "Batch 1",
      title: "Pelatihan Keterampilan Interpersonal",
      totalClass: 14,
      classAttended: 14,
    },
    {
      topic: "Pelatihan Keterampilan Komunikasi",
      milestone: "Batch 1",
      title: "Pelatihan Keterampilan Interpersonal",
      totalClass: 14,
      classAttended: 8,
    },
    {
      topic: "Pelatihan Keterampilan Komunikasi",
      milestone: "Batch 3",
      title: "Pelatihan Keterampilan Interpersonal",
      totalClass: 14,
      classAttended: 4,
    },
  ];

  return (
    <section className="bg-neutral-50 w-full px-6 py-4 rounded-md mb-10">
      <h1 className="font-semibold text-lg text-neutral-900">Lanjutkan Pelatihan Kamu</h1>
      <p className="text-neutral-400 text-sm mb-6">Batch I</p>
      <section>
        {dummyProgress
          .slice(0, !isViewMore ? 3 : 10)
          .map(({ title, classAttended, milestone, topic, totalClass }, index) => {
            return (
              <ProgressCard
                key={index}
                title={title}
                classAttended={classAttended}
                milestone={milestone}
                topic={topic}
                totalClass={totalClass}
                percentage={(classAttended / totalClass) * 100}
              />
            );
          })}
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
