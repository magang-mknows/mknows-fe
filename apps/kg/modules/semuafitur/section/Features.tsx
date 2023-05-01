import { FC, ReactElement} from "react";
import Card from "../component/Card";
import search from "../assets/search.svg";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import { filterSemuaFitur, querySemuaFitur } from "../store";

const Features: FC = (): ReactElement => {

  const [query, setQuery] = useRecoilState(querySemuaFitur);
  const getSemuafitur = useRecoilValue(filterSemuaFitur);

  return (
    <>
      <section className="py-5 lg:px-[72px] md:px-[72px] px-[20px] bg-white dark:bg-[#222529] w-full">
        <p className="font-bold text-[28px] text-center">Apa yang ingin kamu pelajari?</p>
        <p className="text-[#A3A3A3] font-semibold text-[16px] text-center">
          Kembangkan keterampilan Kamu dengan kursus dan sertifikasi online di Kampus Gratis.
          Berbagai macam jenis materi tersedia.
        </p>
        <div className="flex bg-[#F5F5F5] my-[36px] rounded-lg py-[16px] px-[26px] w-full">
          <Image src={search} alt={"tes"} />
          <input
            type="text"
            placeholder="Cari Fitur"
            className="ml-[24px] w-full bg-[#F5F5F5] focus:outline-none dark:text-black"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="grid grid-cols-12 lg:gap-x-[40px] md:gap-x-[40px] gap-x-[20px] gap-y-[34px]">
          {getSemuafitur.map((fitur) => {
            return (
              <div
                key={fitur.id}
                style={{ background: fitur.warna }}
                className="lg:col-span-3 md:col-span-4 col-span-6 lg:py-[25px] md:py-[25px] py-[15px] rounded-lg"
              >
                <Card
                  href={fitur.slug}
                  hasImage={true}
                  src={fitur.icon}
                  imgStyle="lg:w-[80px] md:w-[80px] w-[40px] mx-auto"
                  imgwidth={80} 
                >
                  <p className="font-bold mx-auto dark:text-black lg:text-[16px] md:text-[16px] text-[10px]">{fitur.namaFitur}</p>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Features;