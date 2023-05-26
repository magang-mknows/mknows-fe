import { FC, ReactElement } from "react";
import { TPanelProps } from "./types";
import Link from "next/link";
import { BsFillCheckCircleFill } from "react-icons/bs";

export const PanelSection: FC<TPanelProps> = ({ icon, href, title }): ReactElement => {
  return (
    <div className="h-[60px] items-center flex justify-between border-b border-[#D4D4D4] pl-[21px] pr-[40.5px]">
      <div className="flex gap-x-6 items-center">
        {icon}
        <Link
          href={`${href as unknown as string}`}
          className="text-sm text-neutral-800 transition-all duration-75 ease-in-out hover:underline"
        >
          {title}
        </Link>
      </div>
      <BsFillCheckCircleFill className="text-xl text-[#3EB449]" />
    </div>
  );
};
