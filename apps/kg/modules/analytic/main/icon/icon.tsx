import Image from 'next/image';
import { FC, ReactElement } from 'react';
import report from './assets/Report-rafiki 1.svg';

export const AnalyticIcon: FC = (): ReactElement => {
  return (
    <section className="bg-[#E9F6FD80] col-span-3 lg:col-span-1 py-10 px-4">
      <Image
        src={report}
        alt="offer-view"
        className=" w-full h-80 relative z-20  "
        height={100}
        width={100}
        loading="eager"
      />
    </section>
  );
};
