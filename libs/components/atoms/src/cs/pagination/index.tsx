import { ReactElement, FC, useState } from "react";
import { IconPrev, IconNext } from "../icons";

const Pagination: FC = (): ReactElement => {
  const [isActive, setisActive] = useState("1");
  return (
    <div className="flex">
      <p className="text-xs text-gray-400 w-[30%] py-2">menampilkan 1-4 dari 110 hasil</p>
      <div className="flex justify-center items-center gap-x-2 text-neutral-400 ">
        <div className="w-9 h-9 px-3 border flex items-center rounded-md cursor-pointer">
          <IconPrev />
        </div>
        <div
          className={`${
            isActive === "1" ? "text-[#ffffff] bg-primary-400 rounded-md" : "text-neutral-400"
          } "w-9 h-9 px-3 border flex items-center cursor-pointer" `}
          onClick={() => setisActive("1")}
        >
          1
        </div>
        <div
          className={`${
            isActive === "2" ? "text-[#ffffff] bg-primary-400 rounded-md" : "text-neutral-400"
          } "w-9 h-9 px-3 border flex items-center cursor-pointer" `}
          onClick={() => setisActive("2")}
        >
          2
        </div>
        <div
          className={`${
            isActive === "3" ? "text-[#ffffff] bg-primary-400 rounded-md" : "text-neutral-400"
          } "w-9 h-9 px-3 border flex items-center cursor-pointer" `}
          onClick={() => setisActive("3")}
        >
          3
        </div>
        <div
          className={`${
            isActive === "4" ? "text-[#ffffff] bg-primary-400 rounded-md" : "text-neutral-400"
          } "w-9 h-9 px-3 border flex items-center cursor-pointer" `}
          onClick={() => setisActive("4")}
        >
          4
        </div>
        <div
          className={`${
            isActive === "5" ? "text-[#ffffff] bg-primary-400 rounded-md" : "text-neutral-400"
          } "w-9 h-9 px-3 border flex items-center cursor-pointer" `}
          onClick={() => setisActive("5")}
        >
          5
        </div>
        <div className="w-9 h-9 px-3 border flex items-center rounded-md cursor-pointer">
          <IconNext />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
