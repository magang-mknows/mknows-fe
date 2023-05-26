import Image from "next/image";
import catalogBg from "../assets/catalog1.svg";

import { FC, ReactElement } from "react";
import { Button } from "@mknows-frontend-services/components/atoms";

export const CatalogSection: FC = (): ReactElement => {
  const dummyCatalogs = [
    {
      title: "Pelatihan dan Pengembangan Karyawan",
      desc: "200 Karyawan",
    },
    {
      title: "Pelatihan dan Pengembangan Karyawan",
      desc: "230 Karyawan",
    },
    {
      title: "Pelatihan dan Pengembangan Karyawan",
      desc: "100 Karyawan",
    },
  ];

  return (
    <div className="px-8 md:px-14 lg`:`px-16 py-12 md:py-14 lg:py-16 xl:py-20 bg-neutral-100">
      <h1 className="font-bold  text-neutral-900 text-2xl md:text-3xl text-center mb-2 lg:mb-3">
        Konten Katalog
      </h1>
      <p className="text-center text-neutral-400 font-normal text-xs md:text-sm lg:text-base px-0 md:px-2 lg:px-10 xl:px-24 mb-12">
        Dalam solusi kami, kami menyediakan konten interaktif yang mudah digunakan dan menyenangkan
        untuk digunakan yang akan membantu Anda dan tim Anda mencapai potensi maksimal dan terlibat
        sepenuhnya dalam proses pelatihan
      </p>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {dummyCatalogs.map((catalog, index) => {
          return (
            <section key={index} className="bg-neutral-50  rounded-md overflow-hidden shadow-sm">
              <Image
                src={catalogBg}
                alt="catalog-view"
                className=" bg-neautral-50 w-full "
                height={100}
                width={100}
                loading="lazy"
              />
              <h1 className="mb-2 text-neutral-900 px-5 text-sm md:text-base py-2 font-bold">
                {catalog.title}
              </h1>

              <div className="flex justify-between items-end px-5 mb-3">
                <section className="flex gap-2 items-center">
                  <span className="w-2 h-2 rounded-lg bg-version3-500 block"></span>
                  <p className="text-xs text-neutral-800 font-medium">{catalog.desc}</p>
                </section>
                <Button
                  type="button"
                  className="font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 text-xs py-1  w-20 disabled:bg-version2-200/70 disabled:border-none bg-version2-500 text-neutral-100 hover:bg-version2-300 hover:border-version2-300"
                >
                  <h1>Join Now</h1>
                </Button>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};
