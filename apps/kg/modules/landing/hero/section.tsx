import Image from 'next/image';
import { FC, ReactElement } from 'react';
import { RandomShit1, RandomShit2, RandomShit3 } from '../random-shit';
import { Button } from '@mknows-frontend-services/components/atoms';
import { HoverCard } from '../hover-card';

export const HeroSection: FC = (): ReactElement => {
  return (
    <section className="flex w-full justify-between pt-[118px] px-[70px] h-[800px]">
      <div className="flex gap-y-3 flex-col w-1/2">
        <div className="flex flex-col">
          <h1 className="text-[60px] font-[700] max-w-[742px]">
            Solusi Pendidikan
          </h1>
          <h1 className="text-[60px] font-[700] max-w-[742px]">
            Gratis & Berkualitas
          </h1>
        </div>
        <p className="text-[18px] max-w-[674px]">
          Platform belajar gratis pertama di Indonesia memungkinkan akses
          belajar yang mudah bagi siapa saja, tanpa terkecuali.
        </p>
        <Button
          type="button"
          href="/auth/register"
          className="hover:bg-success-400 mt-3 bg-success-500 text-white font-[700] p-3 rounded-lg w-auto"
        >
          Coba Sekarang - Gratis
        </Button>
      </div>
      <div className="flex w-1/2 justify-end relative">
        <RandomShit1 className="absolute top-[160px] lg:left-[200px] 2xl:left-[400px]" />
        <RandomShit2 className="absolute top-[120px] lg:left-[440px] 2xl:left-[640px]" />
        <RandomShit3 className="absolute bottom-[-120px] z-0 lg:left-20 2xl:left-[200px]" />
        <HoverCard />
        <Image
          src={'/assets/images/landing/girl-holding-book.png'}
          loading="eager"
          alt="girl holding book"
          priority
          width={442}
          height={652.72}
        />
      </div>
    </section>
  );
};
