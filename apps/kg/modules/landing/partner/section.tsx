import { Carousel } from '@mknows-frontend-services/components/molecules';
import { FC, ReactElement, useRef } from 'react';
import Image from 'next/image';
import AliceCarousel from 'react-alice-carousel';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const PartnerSection: FC = (): ReactElement => {
  const carousel = useRef<AliceCarousel>(null);
  const loadPath = (val: number): string =>
    `/assets/images/landing/partner-${val}.png`;
  const _partner_logo = [
    loadPath(1),
    loadPath(2),
    loadPath(3),
    loadPath(4),
    loadPath(5),
  ];
  return (
    <section className="flex flex-col gap-y-[64px] items-center py-[118px] justify-center">
      <h1 className="text-[44px] font-[700] text-black">
        Mitra Kampus <strong className="text-primary-base">Kami</strong>
      </h1>
      <div className="flex w-full px-[196px]">
        <MdChevronLeft
          onClick={(e) => carousel?.current?.slideNext(e)}
          size={40}
          className="rounded-lg h-[60px] absolute text-primary-600 left-10 z-10"
        />
        <Carousel carouselRef={carousel}>
          {_partner_logo.map((logo, key) => (
            <Image
              key={key}
              src={logo}
              width={106}
              height={105}
              alt="Partner Logo"
              loading="lazy"
              priority={false}
              quality={90}
            />
          ))}
        </Carousel>
        <MdChevronRight
          onClick={(e) => carousel?.current?.slidePrev(e)}
          size={40}
          className="rounded-lg h-[60px] text-primary-600 absolute right-10 z-10"
        />
      </div>
    </section>
  );
};
