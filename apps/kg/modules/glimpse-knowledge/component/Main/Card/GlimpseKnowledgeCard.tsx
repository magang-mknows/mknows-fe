import Image from "next/image";
import Link from "next/link";
import { FC, ReactElement } from "react";

export const GlimpseKnowledgeCard: FC = (): ReactElement => {
  return (
    <section className="bg-neutral-50 shadow-sm rounded-md overflow-hidden min-h-[320px] ">
      <Link href={"/sekilas-ilmu/article#1"} passHref>
        <figure className="w-full h-40 overflow-hidden">
          <Image
            src={`/assets/glimpse-knowledge/dummyImg.svg`}
            alt="article-view"
            className="bg-neautral-50 "
            height={500}
            width={800}
            loading="eager"
          />
        </figure>
        <section className="px-4 py-4 mb-4">
          <header className="flex items-center justify-between mb-4">
            <div className="px-4 py-2 text-xs font-bold rounded-md shadow-sm text-neutral-800 bg-secondary-blue-100 w-fit">
              <h1>#softskills</h1>
            </div>
            <h1 className="text-xs text-neutral-400">Sel, 28 Feb 2023</h1>
          </header>
          <main>
            <h1 className="mb-2 text-xl font-bold text-neutral-800">
              Masih Sering Gugup Saat Public Speaking? Terapin 6 Tips Ampuh Ini!
            </h1>
            <p className="text-sm text-neutral-500">
              Menjadi seorang yang pandai berbicara di depan umum adalah sebuah kemampuan y...
            </p>
          </main>
        </section>
      </Link>
    </section>
  );
};
