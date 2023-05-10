import { FC, ReactElement } from 'react';
import Image from 'next/image';
import { EventBannerInformation } from './banner-information/EventBannerInformation';

export const EventDetailBanner: FC = (): ReactElement => {
  const dummyDetail = [
    {
      title: 'Webinar Cyber Security',
      date: 'Tuesday, 28 February 2023 19:00 WIB',
      fee: 'Gratis',
      benefits: [
        'Sertifikat',
        'Pemahaman tentang Cyber Security',
        'Ilmu langsung dari seorang Cyber Security',
      ],
    },
  ];

  return (
    <section className="items-center block mb-10 lg:flex gap-36">
      <Image
        src={'/assets/event/event.svg'}
        className="w-full lg:w-[720px] mb-2"
        height={100}
        width={100}
        alt="event-view"
      />
      {dummyDetail.map((detail, index) => {
        return (
          <EventBannerInformation
            title={detail.title}
            subTitle={detail.fee}
            desc={detail.date}
            list={detail.benefits}
            key={index}
          />
        );
      })}
    </section>
  );
};
