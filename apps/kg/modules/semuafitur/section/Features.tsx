import { FC, ReactElement } from "react";
import Card from "../component/Card";
import search from "../assets/search.svg";
import random from "../assets/random.svg";
import random2 from "../assets/random2.svg";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterSemuaFitur, querySemuaFitur } from "../store";

const Features: FC = (): ReactElement => {
  const [query, setQuery] = useRecoilState(querySemuaFitur);
  const getSemuafitur = useRecoilValue(filterSemuaFitur);

  return (
    <section className="py-[40px] lg:px-[72px] md:px-[72px] px-[20px] bg-neutral-100 dark:bg-[#222529] w-full">
      <div className="flex absolute z-0 top-20">
        <Image src={random} alt={"tes"} />
      </div>
      <div className="flex absolute z-0 bottom-24 right-0">
        <Image src={random2} alt={"tes"} />
      </div>
      <div className="flex relative flex-col items-center">
        <h1 className="font-bold text-[28px] text-center">Fitur Kampus Gratis</h1>
        <p className="text-[#A3A3A3] font-semibold text-[16px] max-w-1/2 text-center">
          Kembangkan keterampilan Kamu dengan kursus dan sertifikasi online di Kampus Gratis.
          Berbagai macam jenis materi tersedia.
        </p>
        <div className="flex bg-white my-[36px] z-10 rounded-lg py-[16px] px-[26px] w-2/3 items-center">
          <Image src={search} alt={"tes"} />
          <input
            type="text"
            placeholder="Cari Fitur"
            className="ml-[24px] w-full focus:outline-none dark:text-black"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-12  lg:gap-x-[40px] md:gap-x-[40px] gap-x-[20px] gap-y-[34px]">
        {getSemuafitur.map((fitur) => {
          return (
            <div
              key={fitur.id}
              className="lg:col-span-3 md:col-span-4 col-span-6 lg:py-[8px] md:py-[25px] py-[15px] rounded-lg bg-white z-10 shadow-2xl"
            >
              <Card
                className="items-start justify-start flex "
                href={fitur.slug}
                hasImage={true}
                src={fitur.icon}
                imgStyle="lg:w-[80px] md:w-[80px] w-[40px]"
                imgwidth={80}
              >
                <div className="flex flex-col px-4">
                  <h1 className="font-bold text-left dark:text-black lg:text-[16px] md:text-[16px] text-[10px]">
                    {fitur.namaFitur}
                  </h1>
                  <p className="text-neutral-base text-sm w-full py-2">{fitur.desc}</p>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
