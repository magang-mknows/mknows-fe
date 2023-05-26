import Image from "next/image";
import { FC, ReactElement } from "react";
import G1 from "./assets/g1.png";
import G2 from "./assets/g2.png";
import { IconCheck } from "./icons";

export const GlimpseModule: FC = (): ReactElement => {
  return (
    <main className="bg-white grid">
      <section className="flex flex-col md:flex-row justify-between px-6 md:px-[70px] w-full items-center">
        <section className="flex flex-col w-auto md:w-1/2 gap-y-6">
          <h1 className="md:text-[44px] text-[36px] font-bold">
            Sekilas <strong className="text-yellow-base">Info</strong> Kampus Gratis
          </h1>
          <p className="text-neutral-700 md:text-[24px]">
            <strong className="text-1xl"> Kampus Gratis disingkat KG </strong>
            merupakan sistem manajemen e-learning, yang mencantumkan laporan peningkatan atau
            kemajuan pembelajaran mahasiswa, layaknya perguruan tinggi.
            <br />
            <br />
            Pengembangan platform pembelajaran ini merupakan inisiasi dari pendiri PT Menara
            Indonesia atau M-Knows Consulting, KG memiliki visi memberikan solusi pendidikan tinggi
            yang gratis, berkualitas, bisa diakses siapapun, khususnya kaum marginal, dan selalu
            update.
          </p>
        </section>
        <Image
          src={G1}
          alt="g1"
          width={510}
          height={457.75}
          className="w-auto h-auto my-6 md:my-0"
        />
      </section>
      <section className="flex flex-col md:flex-row justify-between px-[70px] w-full py-[149px] items-center gap-x-[40px]">
        <Image src={G2} alt="g1" width={510} height={457.75} className="w-auto h-auto" />
        <section className="flex flex-col w-1/2 gap-y-6">
          <h1 className="text-[44px] font-bold flex gap-x-3">
            Kelebihan
            <strong className="text-primary-base">Kampus Gratis</strong>
          </h1>
          <p className="text-neutral-700 text-[24px]">
            Terdapat 3 program studi, dan banyak topik pelatihan yang akan merubah masa depan kita,
            di Kampus Gratis
          </p>
          <ul className="flex flex-col gap-x-4 gap-y-4 text-black font-[500] text-[24px]">
            <li className="flex items-center gap-x-2">
              <IconCheck /> Kuliah & Belajar Semua Materi Gratis
            </li>
            <li className="flex items-center gap-x-2">
              <IconCheck /> Di bimbing oleh mentor yang profesional
            </li>
            <li className="flex items-center gap-x-2">
              <IconCheck /> Dukungan untuk Karir masa depan
            </li>
            <li className="flex items-center gap-x-2">
              <IconCheck /> Model pembelajaran yang flexibel
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
};
