import Link from "next/link";
import { FC, ReactElement } from "react";
import { dummyTopik } from "./store";

export const FaqSection: FC = (): ReactElement => {
  return (
    <section className="flex flex-col items-center bg-[#106FA4]/5  w-full ">
      <div className=" pt-14 flex flex-col items-center">
        <h1 className="text-[24px]  text-slate-800 text-center dark:text-white mb-4 font-[600]">
          Paling sering ditanyakan
        </h1>
      </div>
      <div className=" flex lg:w-[1000px] md:w-[800px] w-full px-10 flex-wrap items-center justify-center  mb-[50px] gap-6  ">
        {dummyTopik.map((item, index) => {
          return (
            <Link href={item.href} key={index}>
              <div className=" lg:col-span-4 w-full md:w-[271px] h-[44px] bg-[#FFFf] dark:bg-[#232529] rounded-[8px] flex items-center justify-center">
                <h1 className="text-[14px] ">{item.title}</h1>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
