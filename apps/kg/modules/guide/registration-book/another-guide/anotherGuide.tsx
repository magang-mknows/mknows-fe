import { Fragment, ReactElement } from 'react';
import { dummyGuide } from './store';
import Image from 'next/image';
import Link from 'next/link';

export const AnotherGuideBook = (): ReactElement => {
  return (
    <Fragment>
      <div className="w-full px-6 md:px-8 lg:px-10">
        <div className="title">
          <h1 className="font-[700] text-[16px]">Buku panduan lainnya</h1>
        </div>
        <div className="mt-[24px] mb-[54px]">
          {dummyGuide.map((item, index) => {
            return (
              <Link key={index} href={item.href}>
                <div className="content bg-white dark:bg-[#232529]   w-full h-[54px] shadow-lg rounded-[8px] flex justify-between items-center p-[24px] mt-[16px]">
                  <h1 className="font-[600] text-[16px]">{item.title}</h1>
                  <Image src={item.img} alt={'book'} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};
