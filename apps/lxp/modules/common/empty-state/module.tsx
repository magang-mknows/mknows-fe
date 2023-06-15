import { FC } from "react";
import { TEmptyStateProps } from "./types";
import Image from "next/image";

export const EmpttyState: FC<TEmptyStateProps> = ({
  description,
  classname,
  image,
  imageClass,
}) => {
  return (
    <div className={`flex justify-center flex-col  items-center  w-full h-full ${classname} `}>
      {image ? (
        <figure className="w-full h-[120px] grid place-items-center mb-2 ">
          <Image
            alt="empty-state"
            src={image}
            width={150}
            height={150}
            loading="eager"
            className={`${imageClass} `}
          />
        </figure>
      ) : null}
      <h1 className="text-sm text-neutral-800 font-bold">{description}</h1>
    </div>
  );
};
