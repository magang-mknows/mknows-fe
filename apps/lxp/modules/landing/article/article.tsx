import Image from "next/image";
import { FC, ReactElement } from "react";
import { BsCalendarDate } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import articleBg from "../assets/article1.svg";
import { Button } from "@mknows-frontend-services/components/atoms";

export const ArticleSection: FC = (): ReactElement => {
  const dummyArticles = [
    {
      title: "Meningkatkan Output Perusahaan dengan Pelatihan Karyawan",
      text: "Pelatihan karyawan telah menjadi salah satu elemen penting dalam pengembangan organisasi dan peningkatan produktivitas perusahaan.",
    },
    {
      title: "Apa Guna Pelatihan Karyawan",
      text: "Pelatihan karyawan adalah proses pendidikan yang penting dalam setiap bisnis yang sukses. Ini adalah metode pendidikan yang dirancang.",
    },
    {
      title: "Maximizing Employee Effectivity: Tips for Achieving Success",
      text: "The success of a company relies heavily on the effectiveness of its employees. Employee effectivity refers to the ability of employees to perform their job  ",
    },
  ];

  return (
    <div className="px-8 md:px-14 lg:px-16 py-12 md:py-14 lg:py-16 xl:py-20 bg-neutral-100">
      <h1 className="text-neutral-900 font-bold mb-4 md:mb-5 lg:mb-8 xl:mb-8 text-2xl md:text-3xl">
        Artikel Terbaru
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mb-6 md:mb-8 lg:mb-10 xl:mb-14">
        {dummyArticles.map((article, index) => {
          return (
            <div key={index}>
              <div className="relative">
                <Image
                  src={articleBg}
                  alt="article-view"
                  className="bg-neautral-50 w-full mb-3"
                  height={30}
                  width={30}
                  loading="lazy"
                />
                <div className="bg-neutral-100 flex items-center gap-2 absolute bottom-3 text-sm left-4  px-4 py-1 rounded-md w-fit">
                  <BsCalendarDate className="text-version3-500" />
                  <p className="text-neutral-900 font-medium">Februari 21, 2023</p>
                </div>
              </div>
              <h1 className="font-bold text-neutral-900 text-sm md:text-base mb-1">
                {article.title}
              </h1>
              <p className="text-neutral-700 text-xs ">{article.text}</p>
            </div>
          );
        })}
      </div>
      <div className="w-full flex items-center justify-center md:justify-start lg:justify-center">
        <Button
          type="button"
          className="disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 text-sm py-2 w-[200px]"
        >
          <BiRefresh className="text-lg" />
          <h1>Lihat semua artikel</h1>
        </Button>
      </div>
    </div>
  );
};
