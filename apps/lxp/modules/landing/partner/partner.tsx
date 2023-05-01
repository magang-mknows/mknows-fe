import Image from 'next/image';
import { FC, ReactElement } from 'react';
import brand1 from '../assets/brand1.svg';
import brand2 from '../assets/brand2.svg';
import brand3 from '../assets/brand3.svg';
import brand4 from '../assets/brand4.svg';
import brand5 from '../assets/brand5.svg';
import brand6 from '../assets/brand6.svg';
import brand7 from '../assets/brand7.svg';
import brand8 from '../assets/brand8.svg';

export const PartnerSection: FC = (): ReactElement => {
  const imageSource = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
  ];

  return (
    <div className="bg-version2-400  px-12 md:px-14 lg:px-20 xl:px-36 flex flex-wrap xl:flex-nowrap items-center justify-between py-20">
      <div className="flex flex-col gap-2 mb-8 xl:mb-0">
        <p className="text-sm text-version2-200 ">OUR PARTNER</p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl pr-32 md:pr-36 lg:pr-80 font-bold text-neutral-50">
          Learn with Our Partners
        </h1>
      </div>
      <div className=" grid grid-cols-4 gap-0.5">
        {imageSource.map((data, index) => {
          return (
            <Image
              key={index}
              src={data}
              alt="partner-view"
              className="w-24 md:w-28 lg:w-32 overflow-hidden h-24 md:h-32 lg:h-32 bg-neutral-50 "
              height={1000}
              width={1000}
              loading="lazy"
            />
          );
        })}
      </div>
    </div>
  );
};
