import { FC, ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import Slide1 from './assets/slider-1.svg';
import Slide2 from './assets/slider-2.svg';
import Slide3 from './assets/slider-3.svg';
import { TAuthLayoutProps } from './types';

const SliderLayout: FC = (): ReactElement => {
  const [slider, setSlider] = useState(1);

  return (
    <div className="hidden lg:flex flex-col  justify-center items-center w-1/2 h-full">
      <figure className="h-[340px] ">
        {slider === 1 ? (
          <Image
            src={Slide1}
            width={354}
            height={354}
            loading="eager"
            priority
            alt={'Auth'}
            className="transition-all max-w-[300px]s"
          />
        ) : slider === 2 ? (
          <Image
            src={Slide2}
            width={354}
            height={354}
            priority
            loading="eager"
            alt={'Auth'}
            className="transition-all max-w-[300px]s"
          />
        ) : slider === 3 ? (
          <Image
            src={Slide3}
            width={354}
            height={354}
            priority
            loading="eager"
            alt={'Auth'}
            className="transition-all max-w-[300px]s"
          />
        ) : (
          ''
        )}
      </figure>
      <section className="min-h-[120px] w-full px-14 text-center">
        {slider === 1 ? (
          <>
            <div className="text-[#171717] text-[27px] font-[700] ">
              Selamat Datang di Kampus Gratis
            </div>
            <p className="text-[#737373]  text-[16px] font-[500] ">
              Platform belajar gratis pertama di Indonesia, belajar mudah dengan
              kampus gratis bisa diakses siapapun khususnya kaum marginal
            </p>
          </>
        ) : slider === 2 ? (
          <>
            <div className="text-[#171717] text-[27px] font-[700]">
              Solusi Pendidikan Gratis & Berkualitas
            </div>
            <div className="text-[#737373] text-[16px] font-[500] ">
              Kamu bisa raih jenjang pendidikan yang cemerlang tanpa <br />{' '}
              perlu mengeluarkan biaya sedikitpun
            </div>
          </>
        ) : slider === 3 ? (
          <>
            <div className="text-[#171717] text-[27px] font-[700]">
              Terdapat 16 fitur yang membantu kamu
            </div>
            <div className="text-[#737373] text-[16px] font-[500] ">
              Dibimbing oleh mentor yang profesional, Dukungan <br /> untuk
              karir masa depan
            </div>
          </>
        ) : null}
      </section>
      <div className="flex justify-center gap-3 mt-6">
        <button onClick={() => (slider !== 1 ? setSlider(1) : '')}>
          <div
            className={`${
              slider === 1 ? 'w-12 bg-primary-500' : ' w-3 '
            } h-3  transition-all rounded-full bg-neutral-300`}
          ></div>
        </button>
        <button onClick={() => (slider !== 2 ? setSlider(2) : '')}>
          <div
            className={`${
              slider === 2 ? 'w-12 bg-primary-500' : ' w-3 '
            } h-3  transition-all rounded-full bg-neutral-300`}
          ></div>
        </button>
        <button onClick={() => (slider !== 3 ? setSlider(3) : '')}>
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
  h = 'screen',
  error,
}): ReactElement => {
  const [getError, setError] = useState('');

  useEffect(() => {
    setError(error as string);
  }, [error]);
  return (
    <section
      className={`w-full bg-neutral-100 flex justify-center items-center lg:py-10 lg:px-14 md:p-8 sm:p-6 p-4 ${
        h === 'full' ? 'h-full' : 'h-screen'
      }`}
    >
      <section className="flex items-center bg-white w-full h-full rounded-lg shadow-lg">
        <SliderLayout />
        <div className="flex-col md:gap-y-[57px] gap-y-6 items-center justify-center p-6 flex h-full w-full lg:w-1/2">
          <div
            className="flex flex-col
           w-full justify-center pt-[47px] items-center md:items-start md:justify-start gap-y-1"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-[#171717]">
              {title}
            </h1>
            <p className="text-sm  md:text-base text-[#737373] font-medium text-center md:text-left mt-1 lg:pr-36 lg:-mb-6">
              {description}
            </p>
          </div>
          <div className="flex flex-col w-full items-start pb-[37px] justify-start">
            {getError && (
              <span className="bg-error-100 mb-4 text-error-600 w-full font-[700] text-1xl p-4 rounded-lg border-2 border-error-500 flex justify-between">
                <strong>{error}</strong>
                <span onClick={() => setError('')} className="text-right">
                  x
                </span>
              </span>
            )}
            {children}
          </div>
        </div>
      </section>
    </section>
  );
};
