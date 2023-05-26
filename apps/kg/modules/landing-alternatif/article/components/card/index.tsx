import { FC, ReactElement } from "react";
import Image from "next/image";
import { TChoiceFacultyCardProps } from "./types";

export const ChoiceFacultyCard: FC<TChoiceFacultyCardProps> = (props): ReactElement => {
  return (
    <section className="flex flex-col border border-neutral-300 w-auto rounded-lg h-auto bg-white justify-between">
      <Image
        src={props.src}
        alt={"card-landing"}
        width={282}
        height={208}
        loading={"lazy"}
        priority={false}
        className="w-auto h-auto"
      />
      <div className="flex flex-col p-[10px]">
        <div className="flex flex-col justify-between gap-y-6">
          <div className="flex justify-between w-full">
            <p className="text[12px] bg-primary-100 p-1 w-auto rounded-md"># {props.tag}</p>
            <p className="flex text-[12px] text-neutral-500 justify-center items-center">
              {props.date}
            </p>
          </div>
          <div>
            <h1 className="text-black font-bold text-[18px]">{props.title}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4 py-2">
        <p className="flex text-[12px] text-neutral-500 justify-end items-end">172 views</p>
        <svg
          width="14"
          height="18"
          viewBox="0 0 14 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18L7 15L14 18V2C14 0.9 13.1 0 12 0ZM12 15L7 12.82L2 15V2H12V15Z"
            fill="#A3A3A3"
          />
        </svg>
      </div>
    </section>
  );
};
