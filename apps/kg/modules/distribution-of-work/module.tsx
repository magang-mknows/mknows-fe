import { FC, ReactElement } from "react";
import Image from "next/image";
import search from "./assets/search.svg";

export const DistributionOfWorkModule: FC = (): ReactElement => {
  return (
    <main className="bg-neutral-100 h-screen px-[66px] py-[30px]">
      <div>
        <h1 className="text-[24px] font-bold">Penyaluran Kerja</h1>
        <div className="seacrh w-full h-[56px]  bg-neutral-200 dark:bg-[#232529] rounded-[8px] mt-[28px] flex items-center gap-4  ">
          <Image src={search} alt={"search"} className={"ml-[24px]"} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari Lowongan"
            className=" bg-neutral-200 w-full focus:outline-none"
          />
        </div>
      </div>
    </main>
  );
};
