import { FC, ReactElement } from "react";
import Image from "next/image";
import random from "./icon/random.svg";
import consultasion from "./icon/consultasion.svg";
import option from "./icon/option.svg";
import service from "./icon/service.svg";
import headset from "./icon/ic-service.svg";
import { Accordion } from "@mknows-frontend-services/components/molecules";

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
        <div className="flex flex-col justify-center items-center bg-white w-[420px] h-[450px] rounded-md shadow-xl gap-4">
          <div className="flex absolute top-80 pt-28">
            <Image src={service} alt="consul" />
          </div>
          <div className="flex absolute top-80 pt-36">
            <Image src={headset} alt="consul" />
          </div>
          <h1 className="text-black font-semibold text-[28px]">Layanan</h1>
          <div className="flex flex-col text-left px-12 gap-y-4">
            <div className="flex gap-2">
              <Image src={option} alt=">" />
              <p>Dokumen (Unduh berbagai dokumen)</p>
            </div>
            <div className="flex gap-2">
              <Image src={option} alt=">" />
              <p>Proses Dokumen (Ajukan dokumen yang telah di Unduh)</p>
            </div>
            <div className="flex gap-2">
              <Image src={option} alt=">" />
              <p>Cek Status Dokumen</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-3 mx-[136px]">
        <h1 className="text-[28px] font-semibold">Petanyaan yang sering Ditanyakan</h1>
        <p>Berikut list pertanyaan-pertanyaan yang sering ditanyakan kepada kami </p>
        <Accordion title="Apa itu Kampus Gratis?" idAccordion="what" className="bg-neutral-200">
          <p className="bg-white p-6 text-[16px] text-neutral-500">
            Kampus Gratis adalah sebuah sistem manajemen e-learning yang gratis, berkualitas, bisa
            diakses siapapun, kapanpun, dimanapun, dan selalu update.
          </p>
        </Accordion>
      </section>
    </main>
  );
};
