import React, { FC, ReactElement } from "react";
import Image from "next/image";
import { resumeItems } from "./const";
import { useDashboardData } from "../../hooks";

export const ResumeSection: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();
  const profile = getDashboardData?.profile;

  const ItemAmounts = [
    profile?.current_subjects,
    profile?.total_certificates,
    profile?.ipk,
    profile?.poin,
  ];

  return (
    <div className="w-full bg-white shadow-sm shadow-neutral-100 rounded-md min-h-[540px] mb-10 overflow-hidden">
      <section className="bg-[#106FA4] rounded-md relative px-6 pt-12 pb-28">
        <h1 className="text-white font-bold text-2xl">Hello, {profile?.full_name}</h1>
        <h2 className="text-white text-sm font-semibold my-2">
          {profile?.role === "STUDENT" ? profile?.major : "-"}
        </h2>
        <p className="flex flex-col text-sm mb-2">
          <div className="flex mb-1">
            <span className="text-white/75">Kamu mengambil</span>
            <span className="text-white border-b-2 border-white/70 decoration-white/70 mx-1">
              {profile?.role === "STUDENT" ? profile?.current_subjects : "-"} Mata Kuliah
            </span>
          </div>
          <span className="text-white/75">Pada semester ini</span>
        </p>
        <section className="absolute -bottom-[216px]  grid grid-cols-2 gap-2 lg:gap-4">
          {resumeItems.map(({ src, title }, index) => {
            return (
              <div
                key={index}
                className="flex auto px-5 py-4 gap-5 flex-col bg-neutral-100 hover:bg-neutral-200 cursor-pointer transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-[140px] md:w-32 lg:w-40"
              >
                <div className="flex flex-col justify-between gap-y-4">
                  <Image className="w-8" src={src} alt="icon" />
                  <section>
                    <h1 className=" text-3xl font-bold text-neutral-600 mb-2">
                      {profile?.role === "STUDENT" ? ItemAmounts[index] : "-"}
                    </h1>
                    <h1 className="font-medium text-sm text-neutral-500">{title}</h1>
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
