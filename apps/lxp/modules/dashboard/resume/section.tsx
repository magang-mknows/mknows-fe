import { FC, ReactElement, useEffect, useState } from "react";
import { LabIcon, HomeIcon, ClockIcon, ThropyIcon } from "./assets";

export const ResumeSection: FC = (): ReactElement => {
  const dummySidebarItems = [
    {
      desc: 0,
      title: "Kelas Terdaftar",
    },
    {
      desc: 0,
      title: "Sertifikat",
    },
    {
      desc: 0,
      title: "IPK Rata-rata",
    },
    {
      desc: 0,
      title: "Total Poin",
    },
  ];

  const [isMounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isMounted) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="w-full shadow-md  bg-neutral-50 shadow-neutral-100  rounded-md min-h-[540px] mb-10 overflow-hidden">
      <section className="text-neutral-50 bg-version2-400 rounded-md relative px-6 pt-12 pb-28">
        <h1 className="font-bold text-2xl mb-2">Hello, Bandi</h1>
        <p className="text-base mb-2">
          <section>
            <span className="text-neutral-50/75">Kamu </span>
            <span className="underline underline-offset-4 decoration-neutral-50/70">
              Belum mengambil Mata Kuliah
            </span>
            <span className="text-neutral-50/75"> Pada semester ini</span>
          </section>
        </p>
        <section className="absolute -bottom-64  grid grid-cols-2 gap-4 lg:gap-2">
          {dummySidebarItems.map(({ desc, title }, index) => {
            return (
              <div
                key={index}
                className="h-40 bg-neutral-100 hover:bg-neutral-200 cursor-pointer transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-[12 0px] md:w-32 lg:w-36"
              >
                <div className="flex  auto p-4 flex-col cursor-pointer  justify-between gap-y-4 text-neutral-500 hover:text-neutral-600 ">
                  {index + 1 === 1 && <LabIcon />}
                  {index + 1 === 2 && <HomeIcon />}
                  {index + 1 === 3 && <ClockIcon />}
                  {index + 1 === 4 && <ThropyIcon />}
                  <section>
                    <h1 className=" text-4xl font-black text-neutral-500 mb-2">{desc}</h1>
                    <h1 className="text-xs lg:text-sm text-neutral-500 ">{title}</h1>
                  </section>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};
