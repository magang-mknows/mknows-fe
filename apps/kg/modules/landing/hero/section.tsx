import Image from "next/image";
import { FC, Fragment, ReactElement } from "react";
import { RandomShit1, RandomShit2, RandomShit3, RandomShitBg } from "../random-shit";
import { Button } from "@mknows-frontend-services/components/atoms";
import { HoverCard } from "../hover-card";
import GirlHoldingBook from "./assets/girl-holding-book.png";

export const HeroSection: FC = (): ReactElement => {
  return (
    <Fragment>
      <RandomShitBg className="z-0 absolute hidden md:block left-0 top-0 bg-neutral-100 w-full overflow-y-hidden h-full" />
      <section className="flex flex-col md:flex-row items-center md:items-start flex-col w-full bg-neutral-100 md:bg-white md:justify-between justify-center overflow-hidden md:pt-[118px] py-[60px] md:px-[70px] px-6 h-full">
        {/* Desktop */}
        <div className="hidden md:flex gap-y-3 items-center md:items-start justify-center md:justify-start flex-col w-1/2 z-10">
          <div className="flex md:flex-col w-full md:w-auto">
            <h1 className="md:text-[60px] text-[30px] font-[700] max-w-[742px]">
              Sarjana Gratis & Berkualitas
            </h1>
            <h1 className="md:text-[60px] text-[30px] font-[700] max-w-[742px]">
              Dengan Konversi SKS
            </h1>
          </div>
          <span className="text-primary-600 text-[24px] font-[700]">
            Kuliah, Pelatihan, Magang & Pengalaman Kerja
          </span>
          <p className="text-[18px] max-w-[674px] font-[700] text-neutral-base">
            Platform Pendidikan Tinggi Gratis pertama di Indonesia. Dengan akses belajar yang mudah
            bagi semua tanpa syarat
          </p>
          <Button
            type="button"
            href="/auth/register"
            className="hover:bg-success-400 mt-3 bg-success-500 text-white font-[700] p-3 rounded-lg w-auto"
          >
            Coba Sekarang - Gratis
          </Button>
        </div>
        <div className="flex md:hidden gap-y-3 items-center justify-center flex-col z-10">
          <div className="flex md:flex-col w-full md:w-auto">
            <h1 className="text-[30px] font-[700] w-full text-center">
              Sarjana Gratis & Berkualitas Dengan Konversi SKS
            </h1>
          </div>
          <span className="text-primary-600 text-[24px] font-[700]">
            Kuliah, Pelatihan, Magang & Pengalaman Kerja
          </span>
          <p className="text-[18px] max-w-[674px] font-[700] text-neutral-base">
            Platform Pendidikan Tinggi Gratis pertama di Indonesia. Dengan akses belajar yang mudah
            bagi semua tanpa syarat
          </p>
          <Button
            type="button"
            href="/auth/register"
            className="hover:bg-success-400 mt-3 bg-success-500 text-white font-[700] p-3 rounded-lg w-auto"
          >
            Coba Sekarang - Gratis
          </Button>
        </div>
        <div className="hidden md:flex md:w-1/2 justify-end relative z-10">
          <RandomShit1 className="absolute top-[160px] lg:left-[200px] xl:left-[200px] 2xl:left-[400px]" />
          <RandomShit2 className="absolute top-[120px] lg:left-[400px] xl:left-[400px] 2xl:left-[640px]" />
          <RandomShit3 className="absolute bottom-[-120px] z-0 lg:left-[-46px] xl:left-20 2xl:left-[200px]" />
          <HoverCard />
          <Image
            src={GirlHoldingBook}
            loading="eager"
            alt="girl holding book"
            priority
            width={442}
            height={652.72}
          />
        </div>
      </section>
    </Fragment>
  );
};
