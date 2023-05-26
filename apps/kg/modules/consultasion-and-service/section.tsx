import { FC, ReactElement } from "react";
import Image from "next/image";
import random from "./icon/random.svg";
import consultasion from "./icon/consultasion.svg";
import option from "./icon/option.svg";

export const ConsultationAndServiceModule: FC = (): ReactElement => {
  return (
    <main className="bg-neutral-100 w-full h-full">
      <section className="flex y-10 flex-col bg-primary-500 h-[244px] mx-[72px] rounded-md justify-center items-center text-white gap-[14px]">
        <h1 className="font-bold text-[36px]">Konsultasi & Layanan</h1>
        <p className="text-[28px]">Apa yang bisa kami bantu untuk Anda?</p>
        <div className="flex absolute pt-44 pl-16">
          <Image src={random} width={20} alt="?" />
        </div>
      </section>
      <section className="flex justify-center items-center py-40 gap-[132px]">
        <div className="flex flex-col justify-center items-center bg-white w-[420px] h-[450px] rounded-md shadow-xl gap-4">
          <div className="flex absolute top-80 pt-28">
            <Image src={consultasion} alt="consul" />
          </div>
          <h1 className="text-black font-semibold text-[28px]">Konsultasi</h1>
          <div className="flex flex-col text-left px-12 gap-y-4">
            <div className="flex gap-2">
              <Image src={option} alt=">" />
              <p>Konsultasi Karir & Cita-Cita</p>
            </div>
            <div className="flex gap-2">
              <Image src={option} alt=">" />
              <p>Konsultasi Masalah Keluarga dan Keuangan</p>
            </div>
            <div className="flex gap-2">
              <Image src={option} alt=">" />
              <p>Konsultasi Masalah Pribadi dan Cuti Kuliah</p>
            </div>
            <div className="flex gap-2">
              <Image src={option} alt=">" />
              <p>Konsultasi Akademik</p>
            </div>
            <div className="flex gap-2">
              <Image src={option} alt=">" />
              <p>Konsultasi Lainnya</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-white w-[420px] h-[450px] rounded-md shadow-xl"></div>
      </section>
    </main>
  );
};
