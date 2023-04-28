import { TAuthLayoutProps } from './types';
import { FC, ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import Slide1 from './assets/slide-1.svg';
import Slide2 from './assets/slide-2.svg';
import Slide3 from './assets/slide-3.svg';

export const SliderLayout: FC = (): ReactElement => {
  const [slider, Setslider] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      Setslider(slider + 1);
    }, 3000);
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      slider === 3 ? Setslider(1) : '';
    };
  }, [slider]);
  return (
    <div className="hidden lg:flex flex-col justify-center items-center w-full h-auto p-6">
      {slider === 1 ? (
        <Image
          src={Slide1}
          width={354}
          height={354}
          loading="eager"
          alt={'Auth'}
          className="transition-all"
        />
      ) : slider === 2 ? (
        <Image
          src={Slide2}
          width={354}
          height={354}
          loading="eager"
          alt={'Auth'}
          className="transition-all"
        />
      ) : slider === 3 ? (
        <Image
          src={Slide3}
          width={354}
          height={354}
          loading="eager"
          alt={'Auth'}
          className="transition-all"
        />
      ) : (
        ''
      )}
      {slider === 1 ? (
        <section>
          <div className="text-[#171717] text-[27px] font-[700]">
            Selamat Datang di Kampus Gratis
          </div>
          <div className="text-[#737373] text-[16px] font-[500] text-center">
            Platform belajar gratis pertama di Indonesia, belajar <br /> mudah
            dengan kampus gratis bisa diakses siapapun <br /> khususnya kaum
            marginal
          </div>
        </section>
      ) : slider === 2 ? (
        <section>
          <div className="text-[#171717] text-[27px] font-[700]">
            Solusi Pendidikan Gratis & Berkualitas
          </div>
          <div className="text-[#737373] text-[16px] font-[500] text-center">
            Kamu bisa raih jenjang pendidikan yang cemerlang tanpa <br /> perlu
            mengeluarkan biaya sedikitpun
          </div>
        </section>
      ) : slider === 3 ? (
        <section>
          <div className="text-[#171717] text-[27px] font-[700]">
            Terdapat 16 fitur yang membantu kamu
          </div>
          <div className="text-[#737373] text-[16px] font-[500] text-center">
            Dibimbing oleh mentor yang profesional, Dukungan <br /> untuk karir
            masa depan
          </div>
        </section>
      ) : (
        ''
      )}
      <div className="flex justify-center gap-[15px] mt-[40px]">
        <button onClick={() => (slider !== 1 ? Setslider(1) : '')}>
          <div
            className={`${
              slider === 1 ? 'w-12 bg-primary-500' : ' w-3 '
            } h-3  transition-all rounded-full bg-neutral-300`}
          ></div>
        </button>
        <button onClick={() => (slider !== 2 ? Setslider(2) : '')}>
          <div
            className={`${
              slider === 2 ? 'w-12 bg-primary-500' : ' w-3 '
            } h-3  transition-all rounded-full bg-neutral-300`}
          ></div>
        </button>
        <button onClick={() => (slider !== 3 ? Setslider(3) : '')}>
          <div
            className={`${
              slider === 3 ? 'w-12 bg-primary-500' : ' w-3 '
            } h-3  transition-all rounded-full bg-neutral-300`}
          ></div>
        </button>
      </div>
    </div>
  );
};

export const AuthLayout: FC<TAuthLayoutProps> = ({
  title,
  description,
  children,
}): ReactElement => {
  return (
    <section className="w-full bg-[#FAFAFA] flex justify-center items-center lg:py-10 lg:px-14 md:p-8 sm:p-6 p-4 h-screen dark:bg-gray-900">
      <section className="flex items-center bg-white w-full h-auto rounded-lg shadow-lg">
        <SliderLayout />
        <div className="flex-col md:gap-y-[57px] gap-y-6 items-center justify-center p-6 flex h-auto w-full">
          <div className="flex flex-col w-full justify-center items-center md:items-start md:justify-start gap-y-1">
            <h1 className="md:text-[36px] text-2xl font-[700] text-[#171717]">
              {title}
            </h1>
            <p className="text-[16px] text-[#737373] font-[400] text-center md:text-left mt-3 lg:-mb-7">
              {description}
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
            {children}
          </div>
        </div>
      </section>
    </section>
  );
};
