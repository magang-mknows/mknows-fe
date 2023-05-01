import Image from "next/image";
import { FC, ReactElement } from "react";
import { TImageIDProps } from "./types";

const LandingPartnerLogo: FC<TImageIDProps> = ({ id }): ReactElement => {
  return (
    <Image
      src={`/assets/landing/brand${id}.webp`}
      alt="partner-view"
      className="w-24 md:w-28 lg:w-32 overflow-hidden h-24 md:h-32 lg:h-32 bg-neutral-50 "
      height={1000}
      width={1000}
      loading="lazy"
    />
  );
};

export default LandingPartnerLogo;
