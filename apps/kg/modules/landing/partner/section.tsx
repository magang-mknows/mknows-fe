import { Carousel } from '@mknows-frontend-services/components/molecules';
import { FC, ReactElement } from 'react';
import Image from 'next/image';

export const PartnerSection: FC = (): ReactElement => {
  const loadPath = (val: number): string =>
    `/assets/images/landing/partner-${val}.png`;
  const _partner_logo = [
    loadPath(1),
    loadPath(2),
    loadPath(3),
    loadPath(4),
    loadPath(5),
  ];
  console.log(_partner_logo);
  return (
    <section className="flex flex-col gap-y-[64px] items-center py-[118px] justify-center">
      <h1 className="text-[44px] font-[700] text-black">
        Mitra Kampus <strong className="text-primary-base">Kami</strong>
      </h1>
      <div className="flex w-full px-[196px]">
        <Carousel>
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
      </div>
    </section>
  );
};
