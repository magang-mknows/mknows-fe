import { ReactElement } from "react";
import Image from "next/image";
import PanduanHero from "../../assets/panduan-hero.svg";
import search from "../../assets/search.svg";

export const HeroSection = (): ReactElement => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-10 px-16 bg-neutral-100">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className=" text-[50px] font-[700]">Panduan</h1>
          <p className="text-[20px] font-light text-neutral-500 dark:text-white">
            Cari informasi penggunaan website Kampus Gratis di sini
          </p>
        </div>
        <div className="seacrh lg:w-[700px] h-[56px]  bg-neutral-200  rounded-[8px] mt-[48px] flex items-center gap-4  ">
          <Image src={search} alt={"search"} className={"ml-[24px]"} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari informasi"
            className=" bg-neutral-200 w-full focus:outline-none"
          />
        </div>
      </div>
      <div className="col-span-1 grid place-content-end lg:-mt-10">
        <Image src={PanduanHero} alt={"panduan"} className={" w-0 lg:w-full h-full"} />
      </div>
    </div>
  );
};
