import { FC, ReactElement } from "react";

import Image from "next/image";
import discussionIcon from "@/assets/discussionRoom/discusionIcon.svg";
import discussionIconDark from "@/assets/discussionRoom/discusionIcon-dark.svg";
import { useTheme } from "next-themes";

const HeroSection: FC = (): ReactElement => {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <section className="text-neutral-800 dark:text-neutral-100 flex justify-center  items-center md:gap-20 gap-10">
      <div className=" flex flex-col relative  w-full ">
        <span className="block absolute xl:left-36 left-20 z-10 -top-4 h-10 w-10 text-neutral-900 rounded-full bg-red-100 dark:bg-[#17A2B8]"></span>
        <h1 className="lg:text-5xl text-3xl  md:text-4xl font-black md:text-left lg:text-center relative z-20 mb-2">
          Ruang Diskusi
        </h1>
        <p className="md:text-base text-xs  tracking-wide md:text-left lg:text-center">
          Bahas topik yang ingin anda diskusikan disini
        </p>
      </div>
      <div className="w-full  flex justify-center ">
        {currentTheme === "dark" ? (
          <Image alt="discussionIcon" src={discussionIcon} />
        ) : (
          <Image alt="discussionIcon" src={discussionIconDark} />
        )}
      </div>
    </section>
  );
};

export default HeroSection;
