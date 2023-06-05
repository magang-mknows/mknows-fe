import { FC, ReactElement } from "react";
import Image from "next/image";
import BannerAssets1 from "../assets/b1.svg";
import Certificate from "../assets/cerificate.svg";

export const Banner1Module: FC = (): ReactElement => {
  return (
    <main className="flex bg-white w-full pt-20 justify-center items-center mx-14">
      <div className="flex w-full justify-end pr-20 absolute  z-40 pb-16">
        <Image
          src={Certificate}
          alt={"Banner 1"}
          priority={false}
          loading="lazy"
          className="rounded-tr-lg md:block hidden rounded-br-lg"
        />
      </div>
      <section className="bg-primary-500 w-[1040px] h-[210px] flex flex-col items-center rounded-lg">
        <div className="flex w-full">
          <div className="flex flex-col justify-center items-start gap-y-[12px] w-full pl-[64px]">
            <h1 className="text-white font-[700] text-[32px] text-center w-full">
              Dapatkan sertifikat Gratis!!
            </h1>
            <p className="text-white font-[700] text-[18px] text-center">
              Sertifikat iSertifikat iSertifikat iSertifikat iSertifikat iSertifikat iSertifikat i
            </p>
          </div>
          <Image
            src={BannerAssets1}
            width={410}
            height={438}
            alt={"Banner 1"}
            priority={false}
            loading="lazy"
            className="rounded-tr-lg md:block hidden rounded-br-lg"
          />
        </div>
      </section>
    </main>
  );
};
