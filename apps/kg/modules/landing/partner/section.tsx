import { Carousel } from "@mknows-frontend-services/components/molecules";
import { FC, ReactElement, useRef } from "react";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Partner1 from "./assets/partner-1.png";
import Partner2 from "./assets/partner-2.png";
import Partner3 from "./assets/partner-3.png";
import Partner4 from "./assets/partner-4.png";
import Partner5 from "./assets/partner-5.png";

export const PartnerSection: FC = (): ReactElement => {
  const carousel = useRef<AliceCarousel>(null);
  const _partner_logo = [Partner1, Partner2, Partner3, Partner4, Partner5];
  return (
    <section className="flex flex-col gap-y-[64px] bg-white items-center py-[118px] justify-center">
      <h1 className="md:text-[44px] text-[36px] font-[700] text-black">
        Mitra Kampus <strong className="text-primary-base">Kami</strong>
      </h1>
      <div className="flex w-full md:px-[196px]">
        <MdChevronLeft
          onClick={(e) => carousel?.current?.slideNext(e)}
          size={40}
          className="rounded-lg hidden md:block h-[60px] absolute text-primary-600 left-10 z-10"
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
          className="rounded-lg hidden md:block h-[60px] text-primary-600 absolute right-10 z-10"
        />
      </div>
    </section>
  );
};
