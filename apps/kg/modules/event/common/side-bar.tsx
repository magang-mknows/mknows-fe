import Link from "next/link";
import { FC, ReactElement } from "react";
import { SideBarProps } from "../types";

export const SideBar: FC<SideBarProps> = ({ active }): ReactElement => {
  return (
    <div className="flex flex-col gap-[36px] w-[339px] ">
      <div className="flex flex-col gap-[24px]">
        <h1 className="text-[28px] font-[600]">Acara Kampus</h1>
        <p className="text-[18px] font-[400]">
          Pilih dan ikuti beragam webinar seru dan menarik dari Kampus Gratis
        </p>
      </div>
      <div className="flex items-center justify-center flex-col rounded-[8px] gap-[8px] w-[339px] h-[188px] py-[20px] px-[16px] bg-white text-[#737373] text-[14px] font-[600] dark:bg-[#1b1e21] dark:text-white">
        <div
          className={`flex items-center px-[12px] rounded-[8px] w-full h-full ${
            active === "EventList" && "bg-[#E9F6FD] dark:bg-[#a1a1a8]"
          } `}
        >
          <Link href={"/acara-kampus"}>Daftar Event</Link>
        </div>
        <div
          className={`flex items-center px-[12px] rounded-[8px] w-full h-full ${
            active === "RegisteredEvent" && "bg-[#E9F6FD] dark:bg-[#a1a1a8]"
          } `}
        >
<<<<<<< Updated upstream
          <Link href={"/acara-kampus-terdaftar"}>Event Terdaftar</Link>
=======
          <Link href={'/acara-kampus/terdaftar'}>Event Terdaftar</Link>
>>>>>>> Stashed changes
        </div>
        <div
          className={`flex items-center px-[12px] rounded-[8px] w-full h-full ${
            active === "EventHistory" && "bg-[#E9F6FD] dark:bg-[#a1a1a8]"
          } `}
        >
<<<<<<< Updated upstream
          <Link href={"/acara-kampus-riwayat"}>Riwayat Event</Link>
=======
          <Link href={'/acara-kampus/riwayat'}>Riwayat Event</Link>
>>>>>>> Stashed changes
        </div>
      </div>
    </div>
  );
};
