import React, { ReactElement } from "react";
import Image from "next/image";
import search from "../assets/search.svg";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { filterOptionDictionary } from "../store";

const ContentSection = (): ReactElement => {
  const { query } = useRouter();
  const getOption = useRecoilValue(filterOptionDictionary(query.slug as unknown as string));
  return (
    <div className="flex flex-col px-6 mt-[30px] mb-[50px]">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className=" text-[50px] font-[700]">Kamus Kampus Gratis </h1>
          <p className="text-[14px] font-[400] text-[#737373] ">
            Berupa kumpulan istilah yang sering digunakan yang berkaitan dengan penggunaan dan
            fungsi fitur <br /> yang ada di Website LMS M-Knows
          </p>
        </div>
        <div className="seacrh lg:w-[700px] h-[56px] w-full bg-[#F5F5F5]  rounded-[8px] my-5 flex items-center gap-4  ">
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
      {getOption.map((item, index) => {
        return (
          <div
            key={index}
            className="lg:w-[700px] w-full rounded-[8px] flex flex-col place-content-center my-5 bg-[#F5F5F5] shadow-smdark:text-white  p-4"
          >
            <div className="font-bold text-xl my-1">{item.title}</div>
            <div className="font-medium my-2 text-sm lg:text-base">{item.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentSection;
