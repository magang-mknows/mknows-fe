import { FC, ReactElement } from 'react';
import Image from 'next/image';
import BannerAssets3 from '../assets/b3.png';

export const Banner3Module: FC = (): ReactElement => {
  return (
    <main className="flex bg-white w-full pt-20 justify-center items-center mx-14">
      <section className="bg-neutral-200 w-[1040px] h-[210px] flex flex-col items-center rounded-lg shadow-xl">
        <div className="flex w-full">
          <div className="flex flex-col justify-center items-start gap-y-[8px] w-full pl-[64px] pb-14">
            <h1 className="text-black font-[700] text-[32px] w-full text-left pb-6">
              Tunggu Apa Lagi??
            </h1>
            <p className="text-black font-[700] text-[18px] text-center pb-10">
              Ayo daftarkan dirimu ...
            </p>
          </div>
          <Image
            src={BannerAssets3}
            width={410}
            height={438}
            alt={'Banner 1'}
            priority={false}
            loading="lazy"
            className="rounded-tr-lg md:block hidden rounded-br-lg"
          />
        </div>
      </section>
    </main>
  );
};
