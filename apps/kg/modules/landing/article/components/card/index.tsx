import { FC, ReactElement } from "react";
import Image from "next/image";
import { TArticleCardProps } from "./types";

export const ArticleCard: FC<TArticleCardProps> = (props): ReactElement => {
  return (
    <section className="flex flex-col border border-neutral-300 w-auto rounded-lg h-auto bg-white">
      <Image
        src={props.src}
        alt={"card-landing"}
        width={369}
        height={277}
        loading={"lazy"}
        priority={false}
        className="w-auto h-auto"
      />
      <div className="flex flex-col p-[17px]">
        <div className="flex flex-col gap-y-4">
          <div className="flex text-black w-[180px] h-[31px] items-center px-4 font-semibold bg-[#E3FBDA]  rounded-md">
            # {props.tag}
          </div>
          <h1 className="text-black font-[800] text-[20px] w-full h-[78px]">{props.title}</h1>
          <p className="text-[#A3A3A3]">{props.desc}</p>
        </div>
      </div>
    </section>
  );
};
