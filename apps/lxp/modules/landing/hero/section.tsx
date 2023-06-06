import Image from "next/image";
import { FC, ReactElement } from "react";
import herobg from "../assets/landingHeroImage.webp";
import leaderboardbg from "../assets/leaderBoardImage.svg";
import dashboardbg from "../assets/dashboardImage.svg";
import eventbg from "../assets/eventImage.svg";
import { Button } from "@mknows-frontend-services/components/atoms";

export const HeroSection: FC = (): ReactElement => {
  return (
    <div className="flex flex-col  items-center pt-16 md:pt-20 lg:pt-24 relative overflow-hidden">
      <div className="absolute left-0 right-0 bottom-0 top-0 w-[100wh]">
        <Image
          alt="bg-hero"
          className="h-full -z-50 w-full object-cover"
          src={herobg}
          width={800}
          height={800}
          loading="eager"
          priority
        />
      </div>
      {/* <LandingHeroHeadlineTitle /> */}
      <div className="px-2 relative z-40 md:px-20 lg:px-32 xl:px-[250px] mb-6 md:mb-8 lg:mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-neutral-800 font-bold text-center leading-[38px] md:leading-[52px] lg:leading-[60px] xl:leading-[80px]">
          Tingkatkan <span className="text-version3-500">Keahlianmu</span> Untuk Capai Kesuksesan
          bersama <span className="text-version3-500">LMS M-Knows</span>
        </h1>
      </div>
      {/* <LandingHeroHeadlineDesc /> */}
      <div className="px-8 relative z-40 md:px-12 lg:px-16 xl:px-[280px] text-center mb-6 md:mb-8 lg:mb-10">
        <p className="text-neutral-700 text-sm lg:text-base">
          LXP M-Knows adalah Platform pelatihan yang berbasis Web dan Mobile Apps. LXP digunakan
          untuk mengelola Program pelatihan karyawan, yang bisa di akses kapanpun dan dimanapun.
        </p>
      </div>
      {/* <Button type="primary" text="Get a demo" size="medium" /> */}
      <Button
        type="button"
        className="disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 font-bold text-sm py-2 w-28 transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 "
        title="Get a demo"
      >
        <h1>Get a Demo</h1>
      </Button>

      {/* <LandingHeroHeadlinePoster /> */}
      <div className="mt-10 md:mt-12 lg:mt-20 relative bottom-0">
        <Image
          src={leaderboardbg}
          alt="leaderboard-view"
          className="w-[75px] md:w-[150px] lg:w-[220px] xl:w-[320px]   absolute -bottom-10 md:-bottom-16  lg:-bottom-40 -left-5 lg:-left-6"
          height={100}
          width={100}
          loading="eager"
        />
        <Image
          src={dashboardbg}
          alt="dashboard-view"
          className="w-[300px] md:w-[650px] lg:w-[800px] xl:w-[1100px]"
          height={100}
          width={100}
          loading="eager"
        />
        <Image
          src={eventbg}
          alt="event-view"
          className="w-[80px]  md:w-[220px] lg:w-[260px]  xl:w-[340px]  absolute bottom-4 md:bottom-6 lg:bottom-8 xl:bottom-16 right-4  lg:right-6 xl:right-10"
          height={100}
          width={100}
          loading="eager"
        />
      </div>
    </div>
  );
};
