import React, { ReactElement } from "react";
import Image from "next/image";
import CamusEmpty from "../assets/dictionary-empty.svg";
import search from "../assets/search.svg";

const ContentSection = (): ReactElement => {
  return (
    <div className="flex flex-col file:mt-[30px] mb-[50px] ">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className=" text-[50px] font-[700]">Kamus LMS M-KNOWS </h1>
          <p className="text-[14px] font-[400] text-[#737373]">
            Berupa kumpulan istilah yang sering digunakan yang berkaitan dengan penggunaan dan
            fungsi fitur <br /> yang ada di Website LMS M-Knows
          </p>
        </div>
        <div className="seacrh lg:w-[700px] h-[56px] w-full bg-[#F5F5F5] rounded-[8px] my-5 flex items-center gap-4  ">
          <Image src={search} alt={"search"} className={"ml-[24px]"} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari informasi"
            className=" bg-[#F5F5F5] w-full focus:outline-none"
          />
        </div>
      </div>
      <div className="col-span-1 grid place-content-center my-5 bg-[#F5F5F5] rounded-[8px] py-3 ">
        <Image src={CamusEmpty} alt={""} className={" w-0 lg:w-full h-full"} />
        <p className="w-full flex justify-center px-20 text-neutral-700 dark:text-white font-semibold">
          Tidak ada riwayat pencarian
        </p>
      </div>
    </div>
  );
};

export default ContentSection;
