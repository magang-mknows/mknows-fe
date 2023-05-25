import { FC, ReactElement } from "react";

import { DiscussionIcon } from "../assets";

const DiscussionHero: FC = (): ReactElement => {
  return (
    <section className="px-8 md:px-14 lg:px-16 grid grid-cols-1 md:grid-cols-2 md:gap-20 gap-10">
      <div className="order-2 md:order-1 flex flex-col z-10 relative  w-full h-full items-center justify-center ">
        <h1 className="lg:text-5xl text-3xl  md:text-4xl font-black md:text-left lg:text-center relative -z-10 mb-2">
          Ruang Diskusi
          <span className="block absolute -left-4 -z-20 -top-4 h-10 w-10 text-neutral-900 rounded-full bg-version2-200"></span>
        </h1>
        <p className="md:text-sm text-center  text-xs  text-neutral-600 tracking-wide  lg:text-center">
          Bahas topik yang ingin anda diskusikan disini
        </p>
      </div>
      <div className="order-1 md:order-2  w-full  flex justify-center ">
        <DiscussionIcon />
      </div>
    </section>
  );
};

export default DiscussionHero;
