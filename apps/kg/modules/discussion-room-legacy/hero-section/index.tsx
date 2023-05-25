import { FC, ReactElement } from "react";
import Image from "next/image";

import discussionIcon from "../assets/discusionIcon.svg";

const HeroSection: FC = (): ReactElement => {
  return (
    <section className="flex items-center justify-center gap-10 text-neutral-800 dark:text-neutral-100 md:gap-20">
      <div className="relative flex flex-col w-full ">
        <span className="block absolute xl:left-36 left-20 z-10 -top-4 h-10 w-10 text-neutral-900 rounded-full bg-red-100 dark:bg-[#17A2B8]"></span>
        <h1 className="relative z-20 mb-2 text-3xl font-black lg:text-5xl md:text-4xl md:text-left lg:text-center">
          Ruang Diskusi
        </h1>
        <p className="text-xs tracking-wide md:text-base md:text-left lg:text-center">
          Bahas topik yang ingin anda diskusikan disini
        </p>
      </div>
      <div className="flex justify-center w-full ">
        <Image alt="discussionIcon" src={discussionIcon} />
      </div>
    </section>
  );
};

export default HeroSection;
