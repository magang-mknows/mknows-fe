import Image from "next/image";
import React, { FC } from "react";

import dummyImg from "../../../unique-event/event-content/dummy-img/event.svg";

export const RelatedEvent: FC = () => {
  return (
    <section className="w-full col-span-3 xl:col-span-1">
      <div className="flex justify-between w-full mb-4">
        <h1 className="mb-2 text-lg font-bold">Acara Serupa</h1>
        <p className="text-sm font-bold text-version3-500">Lihat Semua</p>
      </div>
      <section className="p-6 rounded-md shadow-sm bg-neutral-50">
        <figure className="min-h-[200px] object-cover rounded-md overflow-hidden">
          <Image
            src={dummyImg}
            className="mb-2 w-full h-full"
            height={100}
            width={100}
            alt="event-view"
          />
        </figure>
        <div className="flex flex-col pt-4 text-neutral-800 ">
          <p className="mb-2 text-lg">Webinar Cyber Security</p>
          <h1 className="text-[18px] text-version3-500 mb-2 font-bold">GRATIS</h1>
          <p className="text-[14px] text-neutral-500">Tuesday, 28 February 2023 19:00 WIB</p>
        </div>
      </section>
    </section>
  );
};
