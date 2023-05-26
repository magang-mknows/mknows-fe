import { Button } from "@mknows-frontend-services/components/atoms";
import Image from "next/image";
import { FC, ReactElement } from "react";

import waitingBg from "../assets/waiting.svg";

export const OfferSection: FC = (): ReactElement => {
  return (
    <div className="px-8 md:px-14 lg:px-16 bg-neutral-100 ">
      <section className="bg-version2-400 rounded-md px-8 md:px-14 lg:px-16 pt-12 md:pb-12 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 lg:-gap-3 item-center">
        <section className="col-span-1 lg:col-span-2 flex justify-center flex-col">
          <h1 className="text-neutral-100 font-bold text-2xl md:text-3xl mb-3 md:mb-5">
            Tunggu apa lagi?
          </h1>
          <p className="text-neutral-200 text-sm lg:text-lg xl:text-xl mb-4 pr-2 md:pr-12 lg:pr-40 ">
            Daftar sekarang dan nikmati fasilitas belajar yang asik dan terverifikasi!
          </p>
          <Button
            type="button"
            className="font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 text-sm py-3 w-[200px] md:w-[240px] lg:w-[300px] disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300"
          >
            <h1>Daftar Sekarang</h1>
          </Button>
        </section>
        <section className="relative">
          <Image
            src={waitingBg}
            alt="offer-view"
            className=" w-full h-full relative z-20  "
            height={200}
            width={200}
            loading="eager"
          />
          <div className="bg-version2-200 absolute h-[90%] w-[90%] rounded-md -top-2 z-10 -right-2 lg:-right-6"></div>
        </section>
      </section>
    </div>
  );
};
