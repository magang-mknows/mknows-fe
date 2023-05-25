import { FC, ReactElement } from "react";
import { FaQuestion } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

export const ConsultingAndServiceHeader: FC = (): ReactElement => {
  return (
    <header className="mt-2 md:mt-6 lg:mt-8 relative mb-28 h-52 lg:h-64 rounded-md shadow-sm mx-8 md:mx-14 lg:mx-16 px-8 md:px-14 lg:px-16 text-neutral-100 flex flex-col justify-center items-center bg-version2-400">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">Konsultasi dan Layanan</h1>
      <p className="text-base text-neutral-300">Apa yang bisa kami bantu untuk Anda?</p>
      <FaQuestion className="absolute -bottom-4 left-2  lg:-bottom-40 lg:left-20 text-[50px] text-version3-400 rotate-[30deg]" />
      <AiFillStar className="absolute -bottom-10 lg:-bottom-60 left-10 lg:left-40 text-[40px] text-version2-400 rotate-[30deg]" />
      <FaQuestion className="absolute right-0 bottom-36  lg:-bottom-10 lg:right-20 text-[80px] md:text-[90px] text-version3-400 rotate-[30deg]" />
      <AiFillStar className="absolute invisible md:visible  -bottom-40 right-40 text-[80px] text-version2-400 rotate-[30deg]" />
    </header>
  );
};
