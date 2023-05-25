import { Carousel } from '@mknows-frontend-services/components/molecules';
import { FC, ReactElement, useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Banner1Module } from '../banner-1';
import { Banner2Module } from '../banner-2';
import { Banner3Module } from '../banner-3';

export const BannerAlternatif: FC = (): ReactElement => {
  const carousel = useRef<AliceCarousel>(null);
  return (
    <section className="flex w-full flex-col gap-y-[64px] bg-white items-center py-[20px] justify-center">
      <MdChevronLeft
        onClick={(e) => carousel?.current?.slideNext(e)}
        size={40}
        className="rounded-lg hidden md:block h-[60px] absolute left-10 mr-8 text-primary-600  z-10"
      />
      <div className="flex w-full md:px-[196px]">
        <Carousel carouselRef={carousel} single speed={6000}>
          <div className="w-full px-8">
            <Banner1Module />
          </div>
          <div className="w-full ">
            <Banner2Module />
          </div>
          <div className="w-full px-4">
            <Banner3Module />
          </div>
        </Carousel>
      </div>
      <MdChevronRight
        onClick={(e) => carousel?.current?.slidePrev(e)}
        size={40}
        className="rounded-lg hidden md:block h-[60px] text-primary-600 absolute right-10 z-10"
      />
    </section>
  );
};
