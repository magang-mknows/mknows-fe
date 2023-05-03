import Image from 'next/image';
import { FC, ReactElement } from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';
import herobg from '../assets/aboutHeroImage.webp';

export const HeroSection: FC = (): ReactElement => {
  return (
    <div className="px-8 md:px-14 relative lg:px-16 bg-center bg-cover  min-h-[80vh] grid grid-cols-1 lg:grid-cols-3 pt-20 lg:pt-4 shadow-md ">
      <div className="absolute left-0 right-0 top-0 w-[100wh] h-[80vh]">
        <Image
          alt="bg-hero"
          className="h-full -z-50 w-full object-cover"
          src={herobg}
          width={1500}
          height={1500}
          loading="eager"
          priority
        />
      </div>
      <div className=" relative z-10 lg:col-span-2 col-span-3 flex items-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-neutral-100 font-bold  leading-[36px] md:leading-[52px] lg:pr-18 xl:pr-32 lg:leading-[56px] xl:leading-[72px] ">
          M-Knows Consulting Konsultan{' '}
          <span className="text-version3-500">Terbaik</span> Untuk Anda
        </h1>
      </div>
      <div className="bg-version2-400  lg:pt-16 relative top-14 lg:top-[36%] py-14 px-5 md:px-6 lg:px-8 text-sm font-medium text-neutral-100 text-left lg:text-justify h-fit  leading-4 md:text-sm ">
        <RiDoubleQuotesR className="text-8xl text-version3-500 absolute left-2 -top-10 rotate-180 font-bold" />
        <RiDoubleQuotesR className="text-8xl text-version3-500 absolute right-2 -bottom-10 rotate-180 font-bold" />
        <p className="mb-1 ">
          &nbsp; &nbsp; M-Knows Consulting berdiri sejak tahun 2003, melalui
          cabang Jakarta & Surabaya, M-Knows Consulting telah sukses melayani
          beragam perusahaan dengan kualitas kerja yang memuaskan, sesuai
          keahliannya dan pendekatan konsultasi yang didasarkan pada :
        </p>
        <ul className="list-disc px-5 mb-4">
          <li>Applicative</li>
          <li>Contemporary</li>
          <li>High Impact </li>
          <li>Fun & Motivational</li>
        </ul>
        <p className="mb-4">
          &nbsp; &nbsp;Dalam kaitannya dengan education & learning Services,
          M-Knows Consulting berpengalaman dalam mengelola program public
          training & in house training, yang sering kali merupakan bagian dari
          konsultasi.
        </p>
        <p>
          &nbsp; &nbsp;Kami percaya model pelatihan kontemporer lebih baik
          dibandingkan pendekatan yang klasik dan konservatif.
        </p>
      </div>
    </div>
  );
};
