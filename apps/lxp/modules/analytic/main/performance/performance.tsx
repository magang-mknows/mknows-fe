import { FC, ReactElement } from "react";

export const AnalyticPerformance: FC = (): ReactElement => {
  const dummyPerformance = [
    {
      title: "Quiz",
      value: 80,
    },
    {
      title: "Tugas",
      value: 90,
    },
    {
      title: "UAS",
      value: 80,
    },
    {
      title: "UTS",
      value: 70,
    },
    {
      title: "Kecepatan Menyelesaikan Tugas",
      value: 60,
    },
  ];

  return (
    <section className="col-span-3 lg:col-span-2 bg-neutral-50 px-8 py-3">
      <header className="border-b-[0.5px] border-neutral-200 py-2">
        <h1 className="text-sm font-bold">Analisa Performa Karyawan</h1>
      </header>
      <main className="py-4 flex flex-col gap-5">
        {dummyPerformance.map((item, index) => {
          return (
            <section className="flex items-start gap-x-6 flex-wrap md:flex-nowrap " key={index}>
              <h1 className="text-sm text-neutral-600 w-52 font-bold">{item.title}</h1>
              <div className="w-full bg-neutral-200 rounded-full h-2.5 mt-2">
                <div
                  className={`${
                    item.title.toLowerCase() === "quiz" || item.title.toLowerCase() === "tugas"
                      ? "bg-[#95E88D]"
                      : item.title.toLowerCase() === "uas" || item.title.toLowerCase() === "uts"
                      ? "bg-[#FDDB73]"
                      : "bg-[#40A0C8]"
                  } h-2.5 rounded-full w-full`}
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
              <h1 className="text-xs md:text-sm pt-1 md:pt-0 text-neutral-600">{item.value}%</h1>
            </section>
          );
        })}
      </main>
    </section>
  );
};
