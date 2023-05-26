import { FC, ReactElement } from "react";
import Image from "next/image";
import search from "./assets/search.svg";

export const DistributionOfWorkModule: FC = (): ReactElement => {
  return (
    <main className="bg-neutral-100 h-screen px-[66px] py-[30px]">
      <section>
        <h1 className="text-[24px] font-bold">Penyaluran Kerja</h1>
        <div className="seacrh w-full h-[56px]  bg-neutral-200 dark:bg-[#232529] rounded-[8px] mt-[28px] flex items-center gap-4  ">
          <Image src={search} alt={"search"} className={"ml-[24px]"} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari Lowongan"
            className=" bg-neutral-200 w-full focus:outline-none"
          />
        </div>
      </section>
      <section className="flex gap-[60px]">
        <div className="bg-white w-[328px] h-[500px] rounded-md my-6 shadow-xl p-12 gap-3">
          <h1 className="text-[18px] font-bold">Daftar Lowongan</h1>
          <p className="text-neutral-500 py-3">
            Temukan beragam informasi karir yang menarik, hanya di halaman ini.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[28px]">
          <div className="bg-white w-[280px] h-[350px] rounded-md my-6 shadow-xl"></div>
          <div className="bg-white w-[280px] h-[350px] rounded-md my-6 shadow-xl"></div>
          <div className="bg-white w-[280px] h-[350px] rounded-md my-6 shadow-xl"></div>
        </div>
      </section>
    </main>
  );
};
