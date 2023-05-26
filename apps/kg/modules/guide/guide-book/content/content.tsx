import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { dummyGuide } from "./store";

export const ContentSection = (): ReactElement => {
  return (
    <div className="w-full px-6 md:px-8 lg:px-20">
      <div className="mt-[24px] mb-[54px] bg-[#F5F5F5] p-4">
        {dummyGuide.map((item, index) => {
          return (
            <Link key={index} href={item.href}>
              <div className="content bg-white dark:bg-[#232529]  w-full h-[54px] shadow-md rounded-[8px] flex justify-between items-center p-[24px] mt-[16px]">
                <h1 className="font-[600] text-[16px] dark:text-white">{item.title}</h1>
                <Image src={item.img} alt={"book"} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
