import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";

import logo from "../assets/logo.svg";
import { FooterDesc } from "./desc";
import { FooterIcons } from "./icons";
import { FooterLinks } from "./links";
import { FooterAddress } from "./address";

export const LayoutFooter: FC = (): ReactElement => {
  return (
    <div className="bg-neutral-100  px-8 md:px-14 lg:px-16 pt-24 pb-10">
      <div className=" gap-x-10 gap-y-10 lg:gap-x-14 xl:gap-y-20 grid grid-cols-3 mb-14">
        <section className="pr-0  mb-4 col-span-3  lg:col-span-1">
          <Link href={"/"} passHref>
            <Image
              src={logo}
              alt="M-Know Logo's"
              className="w-auto h-6 md:h-9 lg:h-11"
              width={100}
              height={60}
              loading="eager"
              quality={40}
            />
          </Link>
          <FooterDesc />
          <FooterIcons />
        </section>
        <section className="flex gap-x-20 gap-y-10 flex-wrap xl:flex-nowrap col-span-3 lg:col-span-2">
          <FooterLinks />
          <FooterAddress />
        </section>
      </div>
      <section className="w-full flex justify-between items-center ">
        <h1 className="text-xs md:text-sm text-neutral-600">
          2022 - www.lmsmkows.id - Hak Cipta Dilindungi.
        </h1>
        <section className="text-sm flex gap-4 text-neutral-600">
          <h1>Terms of use</h1>
          <h1>Privacy policy</h1>
        </section>
      </section>
    </div>
  );
};
