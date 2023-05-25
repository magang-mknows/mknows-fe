import { FC, ReactElement } from "react";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import gplay from "../../assets/footerGPlay.svg";
import Image from "next/image";

export const FooterIcons: FC = (): ReactElement => {
  return (
    <div className="flex justify-between flex-wrap gap-y-4 items-center">
      <div className="text-lg text-neutral-800 flex gap-x-6">
        <FaFacebookF className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
        <FaTwitter className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
        <FaLinkedinIn className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
        <FaInstagram className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
      </div>
      <Image
        src={gplay}
        alt="goolePlay-view"
        className=" w-[160px] -m-2"
        height={100}
        width={100}
        loading="eager"
      />
    </div>
  );
};
