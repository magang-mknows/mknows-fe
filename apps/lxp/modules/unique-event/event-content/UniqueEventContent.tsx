import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import dummyImg from "./dummy-img/event.svg";

export const UniqueEventContent: FC = (): ReactElement => {
  return (
    <section className="col-span-2">
      <div className="flex items-center w-full gap-2 px-3 py-3 mb-8 rounded-md shadow-sm bg-neutral-100">
        <AiOutlineSearch className="text-xl text-neutral-400" />
        <input
          type="text"
          placeholder="Cari Webinar"
          className="w-full text-sm border-none outline-none bg-neutral-100 text-neutral-700"
        />
      </div>
      <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Link href={"/acara-unik/detail/Webinar-Cyber-Security"} className="overflow-hidden ">
          <div className="w-full px-4 py-4 overflow-hidden bg-neutral-50 shadow-sm  ">
            <figure className="min-h-[224px] rounded-md overflow-hidden">
              <Image
                src={dummyImg}
                className="w-full mb-2 h-full"
                height={100}
                width={100}
                alt="event-view"
              />
            </figure>
            <h1 className="text-base font-bold text-neutral-800">Webinar Cyber Security</h1>
            <p className="mb-3 text-lg font-bold text-version3-500">GRATIS</p>
            <p className="text-xs text-neutral-400">Tuesday, 28 February 2023 19:00 WIB</p>
          </div>
        </Link>
      </section>
    </section>
  );
};
