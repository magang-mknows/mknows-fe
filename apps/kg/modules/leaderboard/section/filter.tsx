import React, { ReactElement, useState } from "react";
import moduleFour from "../assets/module-four.svg";
import Image from "next/image";

export const Filter = (): ReactElement => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("global");
  return (
    <button
      className="md:w-[109px] md:h-[40px] w-20 h-8 rounded-[8px] text-center border-[3px] border-[#106FA4] relative mt-[46px] "
      onClick={() => setOpen(open == true ? false : true)}
    >
      <div className="my-auto flex justify-center md:gap-[10px] gap-[4px] items-center">
        <Image src={moduleFour} alt={"image"} className="md:w-[30px] w-[20px]" />
        <p className="text-[#106FA4] md:text-[14px] text-[10px] dark:text-white">Rules</p>
      </div>
      {open && (
        <div className="flex justify-end container mt-[10px] z-[9000] absolute w-[150px] -bottom-40 ease-in-out ">
          <div className="w-[160px] h-[154px] rounded-[8px] text-center  overflow-hidden shadow-2xl ">
            <button
              className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
              onClick={() => setFilter("global")}
            >
              <div
                className={`h-full w-[5px] ${
                  filter == "global" ? "bg-[#67A5C8]" : "bg-[#FFFF]"
                } absolute left-0 overflow-hidden hover:hover:bg-[#F5F5F5]`}
              ></div>
              <p className="text-[#262626] md:text-[14px] text-[10px] my-auto ml-3">Global</p>
            </button>
            <button
              className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
              onClick={() => setFilter("fakultas")}
            >
              <div
                className={`h-full w-[5px] ${
                  filter == "fakultas" ? "bg-[#67A5C8]" : "bg-[#FFFF]"
                } absolute left-0 overflow-hidden hover:hover:bg-[#F5F5F5]`}
              ></div>
              <p className="text-[#262626] md:text-[14px] text-[10px] my-auto ml-3">Fakultas</p>
            </button>
            <button
              className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
              onClick={() => setFilter("prodi")}
            >
              <div
                className={`h-full w-[5px] ${
                  filter == "prodi" ? "bg-[#67A5C8]" : "bg-[#FFFF]"
                } absolute left-0 overflow-hidden`}
              ></div>
              <p className="text-[#262626] md:text-[14px] text-[10px] my-auto ml-3">Prodi</p>
            </button>
            <button
              className="flex justify-start h-[38px] relative hover:bg-[#F5F5F5] w-full bg-white "
              onClick={() => setFilter("semester")}
            >
              <div
                className={`h-full w-[5px] ${
                  filter == "semester" ? "bg-[#67A5C8]" : "bg-[#FFFF]"
                } absolute left-0 overflow-hidden`}
              ></div>
              <p className="text-[#262626] md:text-[14px] text-[10px] my-auto ml-3">Semester</p>
            </button>
          </div>
        </div>
      )}
    </button>
  );
};
