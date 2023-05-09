import Image from 'next/image';
import { FC } from 'react';
import notfound from '../assets/notFound.svg';
import { TNotFoundProps } from './types';

export const NotFound: FC<TNotFoundProps> = ({ keyword, title }) => {
  return (
    <div className="flex mt-10  absolute justify-center flex-col  items-center w-full">
      <Image
        src={notfound}
        alt="nofound-view"
        className=" w-52 h-52 md:w-56 lg:w-60 md:h-56 lg:h-60 relative "
        height={10}
        width={10}
        loading="eager"
      />
      <h1 className="text-sm text-neutral-800">
        Yah.. Saat ini {title} <span className="font-bold"> {keyword} </span>
        belum tersedia,
      </h1>
      <h1 className="text-sm text-neutral-800">tunggu kabar dari kami ya!</h1>
    </div>
  );
};
