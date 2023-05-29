import { FC, ReactElement } from "react";
import Image from "next/image";
import gojek from "../assets/gojek.svg";

export const Mitra2: FC = (): ReactElement => {
  return (
    <div className="flex flex-col bg-white w-[280px] h-[350px] rounded-md my-6 shadow-xl px-4">
      <div className="flex w-full justify-center">
        <Image src={gojek} alt="logo" />
      </div>
      <h1 className="text-primary-500 font-bold">FronEnd Dev</h1>
      <p className="text-primary-500 py-4">PT Gojek Indonesia</p>
      <p className="text-neutral-500 ">Kota Depok Jawa Barat</p>
      <p className="text-neutral-500">Rp 2.000.000 - 6.000.000</p>
      <p className="text-neutral-500">Freelance</p>
      <div className="bg-primary-100 my-4 text-primary-500 border border-primary-500 p-2 text-sm rounded-md">
        Terbuka hingga 26 Juni 2024
      </div>
    </div>
  );
};
