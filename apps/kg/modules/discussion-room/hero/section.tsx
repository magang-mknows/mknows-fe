import { FC, ReactElement } from "react";
import Image from "next/image";

import discussionIcon from "../assets/discusionIcon.svg";

const DiscussionHero: FC = (): ReactElement => {
  return (
    <section className="grid grid-cols-1 px-8 md:px-14 lg:px-16 md:grid-cols-2 md:gap-20">
      <div className=" z-10 flex flex-col items-center justify-center order-2 w-full h-[300px] md:order-1 ">
        <h1 className="relative mb-2 text-3xl font-black lg:text-5xl md:text-4xl md:text-left lg:text-center -z-10">
          Ruang Diskusi
          <span className="absolute block w-10 h-10 rounded-full -left-4 -z-20 -top-4 text-neutral-900 bg-version2-200"></span>
        </h1>
        <p className="text-xs tracking-wide text-center md:text-sm text-neutral-600 lg:text-center">
          Bahas topik yang ingin anda diskusikan disini
        </p>
      </div>
      <div className="flex justify-star order-1 w-full md:order-2 ">
        <Image alt="discussionIcon" src={discussionIcon} />
      </div>
    </section>
  );
};

export default DiscussionHero;
