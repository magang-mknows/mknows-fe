import { FC, ReactElement } from "react";
import Image from "next/image";
import BannerAssets1 from "../assets/b2.svg";
import ArtisKG from "../assets/artis.svg";

export const Banner2Module: FC = (): ReactElement => {
  return (
    <main className="flex bg-white w-full pr-8 pt-20 justify-center items-center mx-14">
      <div className="flex w-full justify-end pr-20 absolute  z-40 pb-16">
        <Image
          src={ArtisKG}
          width={200}
          height={160}
          alt={"Banner 1"}
          priority={false}
          loading="lazy"
          className="rounded-tr-lg md:block hidden rounded-br-lg"
        />
      </div>
      <section className="bg-[#FAB317] w-[1000px] h-[210px] flex flex-col items-center rounded-lg">
        <div className="flex w-full justify-center items-start">
          <div className="flex flex-col justify-center items-start  w-full pt-12">
            <h1 className="text-white font-[700] text-[32px] text-center w-[500px]">
              Angkatan 2 Akan Dimulai! Segera daftarkan dirimu
            </h1>
            <p className="text-white font-[700] text-[18px] pl-14 text-center">
              Angkatan 2 dimulai pada 19 September 2025
            </p>
          </div>
          <div className="flex w-full justify-end pr-14 absolute  z-0 pb-16">
            <Image
              src={BannerAssets1}
              width={410}
              height={410}
              alt={"Banner 1"}
              priority={false}
              loading="lazy"
              className="rounded-tr-lg md:block hidden rounded-br-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
