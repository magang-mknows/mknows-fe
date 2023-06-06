import Image from "next/image";
import React, { ReactElement } from "react";
import Matkul from "../assets/matkul.svg";
import Dummy from "../assets/Dummy.svg";
import { useGetDepartment } from "../hooks";

const HeroSection = (): ReactElement => {
  const { data } = useGetDepartment();
  console.log(data);
  const hero = [
    {
      icon: Matkul,
      jumlah: data?.data?.subjectEmployeeCount,
      detail: "pelatihan",
      warna: "#E3FBDA",
    },
    {
      icon: Matkul,
      jumlah: data?.data?.dataDepartment.Department.point,
      detail: "poin",
      warna: "#FEF6D0",
    },
    {
      icon: Matkul,
      jumlah: data?.data?.departmentEmployeeCount,
      detail: "karyawan",
      warna: "#E9F6FD",
    },
  ];
  return (
    <div className="flex lg:flex-row flex-col gap-6 ">
      <div className="lg:basis-1/4 lg:justify-start justify-center sm:hidden lg:inline-block xs:inline-block">
        <Image
          src={data?.data?.dataDepartment.Department.thumbnail}
          alt={"dummy"}
          className=" object-cover h-44 w-full lg:w-full lg:h-auto rounded-lg "
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="md:text-[28px] text-[22px] font-[700] text-[#171717]">
          {data?.data?.dataDepartment.Department.name}
        </h1>
        <p className="text-[#525252] text-[14px] font-[400] py-2">
          {data?.data?.dataDepartment.Department.description}
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-rows-1 lg:gap-x-6 sm:gap-x-3 rounded-lg py-4   w-full">
          {hero.map((item, index) => {
            return (
              <div
                key={index}
                style={{ background: item.warna }}
                className="flex justify-start rounded-lg items-center gap-5 px-5 my-2 lg:my-0"
              >
                <Image src={item.icon} alt="icon" className="w-8 h-8 " width={100} height={100} />
                <div className="flex flex-col py-4 text-black">
                  <p className="text-[#262626] text-[16px] font-[600]">{item.jumlah}</p>
                  <p className="text-[#262626] text-[12px] font-[500]">{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
