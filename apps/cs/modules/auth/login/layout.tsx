import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { TLoginProps } from './types';

export const LoginLayout: FC<TLoginProps> = ({ children }): ReactElement => {
  return (
    <section className="flex overflow-hidden">
      <div className="p-8 w-full ">
        <Image
          src="/assets/auth/logo.svg"
          alt="logo"
          width={160}
          height={140}
        />
      </div>
      <div className="flex flex-col h-screen w-full justify-center items-center">
        {children}
        <p className="text-primary-600 pt-8">PT Menara Indonesia</p>
      </div>

      <Image
        src={'/assets/auth/asset3.svg'}
        alt="variasi"
        width={400}
        height={450}
        className="items-end absolute mt-[84vh] mx-40 overflow-hidden"
      />

      <div className="flex  w-screen justify-end items-start overflow-hidden">
        <Image
          src={'/assets/auth/asset2.svg'}
          alt="variasi"
          width={250}
          height={250}
          className="absolute  mx-20"
        />
        <Image
          src={'/assets/auth/asset1.svg'}
          alt="variasi"
          width={250}
          height={250}
        />
      </div>
    </section>
  );
};
