import { FC } from "react";
import { TNotFoundProps } from "./types";
import { NotFoundIcon } from "./icon";

export const NotFound: FC<TNotFoundProps> = ({ keyword, title }) => {
  return (
    <div className="flex mt-10  absolute justify-center flex-col  items-center w-full">
      <NotFoundIcon />
      <h1 className="text-sm text-neutral-800">
        Yah.. Saat ini {title} <span className="font-bold"> {keyword} </span>
        belum tersedia,
      </h1>
      <h1 className="text-sm text-neutral-800">tunggu kabar dari kami ya!</h1>
    </div>
  );
};
