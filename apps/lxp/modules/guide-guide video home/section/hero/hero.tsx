import { ReactElement } from "react";
import Image from "next/image";
import PanduanHero from "../../assets/panduan-hero.svg";
import search from "../../assets/search.svg";

export const HeroSection = (): ReactElement => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-10 lg:mx-6 mt-[10px] px-6 md:px-8 lg:px-10 mb-[50px]">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className=" text-[50px] font-extrabold">Video Panduan</h1>
          <p className="text-[14px] font-light text-neutral-500 ">
            Berupa video tutorial penggunaan dan fungsi fitur yang ada di Website LMS
          </p>
        </div>
        <div className="seacrh lg:w-[700px] h-[56px]  bg-neutral-100  rounded-[8px] mt-[48px] flex items-center gap-4  ">
          <Image src={search} alt={"search"} className={"ml-[24px]"} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari informasi"
            className="w-full focus:outline-none bg-neutral-100"
          />
        </div>
      </div>
      <div className="col-span-1 grid place-content-end lg:-mt-10">
        <Image src={PanduanHero} alt={"panduan"} className={" w-0 lg:w-full h-full"} />
      </div>
    </div>
  );
};

export default HeroSection;
