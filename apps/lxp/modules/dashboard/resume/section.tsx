import { FC, ReactElement } from "react";
import { LabIcon, HomeIcon, ClockIcon, ThropyIcon } from "./assets";
import { TResumeProps } from "./types";

export const ResumeSection: FC<TResumeProps> = (props): ReactElement => {
  return (
    <div className="w-full shadow-md  bg-neutral-50 shadow-neutral-100  rounded-md min-h-[540px] mb-10 overflow-hidden">
      <section className="text-neutral-50 bg-version2-400 rounded-md relative px-6 pt-12 pb-28">
        <h1 className="font-bold text-2xl mb-2">Hello, {props.full_name}</h1>
        <p className="text-base mb-2">
          <section>
            <span className="text-neutral-50/75">Kamu </span>
            <span className="underline underline-offset-4 decoration-neutral-50/70">
              {props?.all_subject_counts === "0"
                ? "Belum mengambil Pelatihan"
                : `Mengambil ${props?.all_subject_counts} Pelatihan`}
            </span>
            <span className="text-neutral-50/75"> Pada Batch ini</span>
          </section>
        </p>
        <section className="absolute -bottom-64  grid grid-cols-2 gap-4 lg:gap-2">
          <div className="h-40 bg-neutral-100 hover:bg-neutral-200 cursor-pointer transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-[12 0px] md:w-32 lg:w-36">
            <div className="flex  auto p-4 flex-col cursor-pointer  justify-between gap-y-4 text-neutral-500 hover:text-neutral-600 ">
              <LabIcon />
              <section>
                <h1 className=" text-4xl font-black text-neutral-500 mb-2">
                  {props?.all_subject_counts}
                </h1>
                <h1 className="text-xs lg:text-sm text-neutral-500 ">Pelatihan</h1>
              </section>
            </div>
          </div>
          <div className="h-40 bg-neutral-100 hover:bg-neutral-200 cursor-pointer transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-[12 0px] md:w-32 lg:w-36">
            <div className="flex  auto p-4 flex-col cursor-pointer  justify-between gap-y-4 text-neutral-500 hover:text-neutral-600 ">
              <HomeIcon />
              <section>
                <h1 className=" text-4xl font-black text-neutral-500 mb-2">
                  {props?.certificate_counts}
                </h1>
                <h1 className="text-xs lg:text-sm text-neutral-500 ">Sertifikat</h1>
              </section>
            </div>
          </div>
          <div className="h-40 bg-neutral-100 hover:bg-neutral-200 cursor-pointer transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-[12 0px] md:w-32 lg:w-36">
            <div className="flex  auto p-4 flex-col cursor-pointer  justify-between gap-y-4 text-neutral-500 hover:text-neutral-600 ">
              <ClockIcon />
              <section>
                <h1 className=" text-4xl font-black text-neutral-500 mb-2">0</h1>
                <h1 className="text-xs lg:text-sm text-neutral-500 ">Poin Rata-rata</h1>
              </section>
            </div>
          </div>
          <div className="h-40 bg-neutral-100 hover:bg-neutral-200 cursor-pointer transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-[12 0px] md:w-32 lg:w-36">
            <div className="flex  auto p-4 flex-col cursor-pointer  justify-between gap-y-4 text-neutral-500 hover:text-neutral-600 ">
              <ThropyIcon />
              <section>
                <h1 className=" text-4xl font-black text-neutral-500 mb-2">0</h1>
                <h1 className="text-xs lg:text-sm text-neutral-500 ">Total Poin</h1>
              </section>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
