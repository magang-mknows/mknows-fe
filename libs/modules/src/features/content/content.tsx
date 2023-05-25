import { FC, ReactElement } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useUserSearch } from "./hook";
import Image from "next/image";

import circle1 from "./assets/circle1.svg";
import circle2 from "./assets/circle2.svg";
import { FeaturesNotFound } from "../not-found";
import { useRecoilValue } from "recoil";
import { FilteredFeatures } from "./store";
import Link from "next/link";

export const ContentSection: FC = (): ReactElement => {
  const { setUserSearch, getUserSearch } = useUserSearch();
  const filteredFeatures = useRecoilValue(FilteredFeatures);
  return (
    <section className="relative z-40">
      <section className="mx-8 md:mx-14 shadow-md lg:mx-72 xl:mx-80 px-4 py-3 flex items-center gap-2 bg-[#eeeeee] rounded-md mb-10 md:mb-14 lg:mb-16 xl:mb-20 relative">
        <AiOutlineSearch className="text-neutral-400 text-lg" />
        <input
          value={getUserSearch}
          onChange={(e) => setUserSearch(e.target.value)}
          type="text"
          placeholder="Cari Fitur"
          className="text-neutral-900 font-bold z-50 relative text-sm bg-primary-100/0 w-full outline-none rounded-md"
        />
        <Image
          src={circle1}
          alt="feature-view"
          className="h-36 w-36 lg:h-52 lg:w-52 mb-2 absolute -top-28 -left-28 -z-20"
          height={30}
          width={30}
          loading="eager"
        />
        <Image
          src={circle2}
          alt="feature-view"
          className="h-36 w-36 lg:h-52 lg:w-52 mb-2  -z-50 absolute -top-16 -right-4 lg:-right-24"
          height={30}
          width={30}
          loading="eager"
        />
      </section>
      {filteredFeatures.length === 0 && <FeaturesNotFound />}

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-8 md:px-14 lg:px-16 gap-6 md:gap-8 pb-20 md:pb-32 lg:pb-40">
        {filteredFeatures.map(({ desc, title, srcImg, isAvailable, link }, index) => {
          return (
            <div
              key={index}
              className={`${
                isAvailable ? "bg bg-neutral-50" : "bg-neutral-200"
              }  p-4 min-h-52 hover:bg-neutral-200 rounded-md shadow-sm transition-colors ease-in-out duration-300 cursor-pointer`}
            >
              <Link href={link ? (link as unknown as string) : ""} passHref>
                <Image
                  src={srcImg as unknown as string}
                  alt="feature-view"
                  className="bg-neautral-50 h-12 w-12 mb-2"
                  height={30}
                  width={30}
                  loading="lazy"
                />

                <h1 className="font-bold mb-2 text-base text-neutral-900">{title}</h1>
                <p className="text-sm text-neutral-600">{desc}</p>
              </Link>
            </div>
          );
        })}
      </section>
    </section>
  );
};
