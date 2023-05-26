import { FC, ReactElement } from "react";
import Image from "next/image";
import mayora from "../assets/mayora.svg";

export const Mitra1: FC = (): ReactElement => {
  return (
    <div className="flex flex-col bg-white w-[280px] h-[350px] rounded-md my-6 shadow-xl px-4">
      <div className="flex w-full justify-center">
        <Image src={mayora} alt="logo" />
      </div>
      <h1 className="text-primary-500 font-bold">Design Grafis</h1>
      <p className="text-primary-500 py-4">PT Mayora Indonesia</p>
      <p className="text-neutral-500 ">Kota Depok Jawa Barat</p>
      <p className="text-neutral-500">Rp 3.500.000 - 5.000.000</p>
      <p className="text-neutral-500">Full Time</p>
      <div className="bg-primary-100 my-4 text-primary-500 border border-primary-500 p-2 text-sm rounded-md">
        Terbuka hingga 26 Juni 2024
      </div>
    </div>
  );
};
