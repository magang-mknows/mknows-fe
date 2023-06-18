import { FC, ReactElement } from "react";
import { TViewProfileHeroProps } from "./type";
import Image from "next/image";
import Avatar from "react-avatar";

export const ViewProfileHero: FC<TViewProfileHeroProps> = ({ avatar, full_name }): ReactElement => {
  return (
    <section className="relative w-full">
      <figure className="w-full min-h-[260px] bg-neutral-200 rounded-md shadow-sm"></figure>

      <figure className="w-[120px] h-[120px] rounded-full bg-neutral-300 border-4 border-neutral-50 overflow-hidden relative grid place-items-center bottom-14 left-0">
        {avatar ? (
          <Image
            src={avatar}
            alt={"user avatar"}
            width={36}
            height={36}
            className="bg-white w-full  flex  items-center justify-center "
          />
        ) : (
          <Avatar name={full_name} color="#F26800" className="w-full h-full" round />
        )}
      </figure>
    </section>
  );
};
