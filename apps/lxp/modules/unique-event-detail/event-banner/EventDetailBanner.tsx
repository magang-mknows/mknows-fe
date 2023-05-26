import { FC, ReactElement } from "react";
import Image from "next/image";
import { EventBannerInformation } from "./banner-information/EventBannerInformation";

import dummyImg from "../../unique-event/event-content/dummy-img/event.svg";

export const EventDetailBanner: FC = (): ReactElement => {
  const dummyDetail = [
    {
      title: "Webinar Cyber Security",
      date: "Tuesday, 28 February 2023 19:00 WIB",
      fee: "Gratis",
      benefits: [
        "Sertifikat",
        "Pemahaman tentang Cyber Security",
        "Ilmu langsung dari seorang Cyber Security",
      ],
    },
  ];

  return (
    <section className="items-center block mb-10 lg:flex gap-36">
      <figure className="lg:w-[720px] h-[400px] overflow-hidden">
        <Image src={dummyImg} className="w-full mb-2" height={100} width={100} alt="event-view" />
      </figure>
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
