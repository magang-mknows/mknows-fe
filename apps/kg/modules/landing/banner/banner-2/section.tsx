import { FC, ReactElement } from "react";
import Image from "next/image";
import BannerAssets2 from "../assets/b2.png";
import { Button } from "@mknows-frontend-services/components/atoms";

export const Banner2Module: FC = (): ReactElement => {
  return (
    <main className="px-[70px] py[10px] pb-20 bg-white w-full">
      <section className="bg-primary-600 w-full flex flex-col items-center rounded-lg h-[438px]">
        <div className="flex w-full">
          <div className="flex flex-col justify-center items-start gap-y-[48px] w-full pl-[64px]">
            <h1 className="text-white font-[700] text-[36px] w-full">
              Yuk, Mulai Bangun MASA DEPAN-mu Disini!
            </h1>
            <p className="text-white font-[300] text-[24px] ">
              Belajar 100% gratis, SELAMANYA, TANPA SYARAT, bersama mentor yang ahli
              dibidangnya..... Tunggu apa lagi?
            </p>
            <Button
              className="bg-[#2D9A41] flex items-center gap-x-4 w-full justify-center text-white font-[700] p-4 rounded-lg"
              type={"button"}
            >
              <span>Daftar Sekarang!</span>
            </Button>
          </div>
          <Image
            src={BannerAssets2}
            width={410}
            height={438}
            alt={"Banner 2"}
            priority={false}
            loading="lazy"
            className="rounded-tr-lg md:block hidden rounded-br-lg py-[44px]"
          />
        </div>
      </section>
    </main>
  );
};
