import { FC, ReactElement } from 'react';
import Image from 'next/image';
import BannerAssets1 from '../assets/b1.png';
import { Button } from '@mknows-frontend-services/components/atoms';
import { IconRocket } from '../icons';

export const Banner1Module: FC = (): ReactElement => {
  return (
    <main className="px-[70px] bg-white w-full">
      <section className="bg-primary-600 w-full flex flex-col items-center rounded-lg h-[438px]">
        <div className="flex w-full">
          <div className="flex flex-col justify-center items-start gap-y-[48px] w-full pl-[64px]">
            <h1 className="text-white font-[700] text-[44px] w-full">
              Temukan Kemudahan Belajar dengan Model Pembelajaran Fleksibel yang
              Inovatif
            </h1>
            <Button
              className="bg-success-500 flex items-center gap-x-4 w-[328px] justify-center text-white font-[700] p-4 rounded-lg"
              type={'button'}
            >
              <span>Lihat Semua</span>
              <IconRocket />
            </Button>
          </div>
          <Image
            src={BannerAssets1}
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
