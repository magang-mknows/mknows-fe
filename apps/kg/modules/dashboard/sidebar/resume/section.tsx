import React, { FC, ReactElement } from 'react';
import Image from 'next/image';
import { dummySidebarItems } from './store';

export const ResumeSection: FC = (): ReactElement => {
  return (
    <div className="w-full bg-white shadow-sm shadow-neutral-100  rounded-md min-h-[540px] mb-10 overflow-hidden">
      <section className="text-white bg-[#106FA4] rounded-md relative px-6 pt-12 pb-28">
        <h1 className="font-bold text-2xl mb-2">Hello, Bandi</h1>
        <p className="text-base mb-2">
          <section>
            <span className="text-white/75">Kamu </span>
            <span className="underline underline-offset-4 decoration-white/70">
              Belum mengambil Mata Kuliah
            </span>
            <span className="text-white/75"> Pada semester ini</span>
          </section>
          {/* <section >
            <span className="text-white/75">Kamu mengambil</span>
            <span className="underline underline-offset-4 decoration-white/70">4 Mata Kuliah </span>
          <span className="text-white/75">Pada semester ini</span>
          </section> */}
        </p>
        <section className="absolute -bottom-64  grid grid-cols-2 gap-2 lg:gap-4">
          {dummySidebarItems.map(({ src, number, title }, index) => {
            return (
              <div
                key={index}
                className="Card flex auto p-4 flex-col h-40 bg-neutral-100 hover:bg-neutral-200 cursor-pointer transition-colors ease-in-out duration-300 rounded-lg shadow-sm w-[140px] md:w-32 lg:w-40"
              >
                <div className="flex flex-col justify-between gap-y-4 text-neutral-500 hover:text-neutral-600 ">
                  <Image className="w-8 " src={src} alt="kelas" />
                  <section>
                    <h1 className=" text-3xl font-black text-neutral-800 mb-2">
                      {number}
                    </h1>
                    <h1 className="text-xs lg:text-sm">{title}</h1>
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
