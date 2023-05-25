import { FC, ReactElement } from 'react';
import Image from 'next/image';
import wind from './assets/wind.png';
import { TestimonyCard } from './card/testi1';
import { TestimonyCard2 } from './card/testi2';

export const TestimonyAlternatif: FC = (): ReactElement => {
  return (
    <main className="bg-white overflow-y-auto h-auto">
      <section className="flex bg-primary-500 rounded-md h-[530px] mx-[72px] justify-start px-[69px] gap-[195px] items-center ">
        <div className="flex flex-col text-white text-left w-[50%]">
          <p className="text-[16px]">Testimony</p>
          <h1 className="text-[36px] font-bold font-700">
            Apa kata mahasiswa Kampus Gratis?
          </h1>
          <p className="text-[16px]">
            Kampus Gratis telah mencetak talenta hebat yang berkontribusi untuk
            negeri. Mari kita simak pendapat mereka terhadap kami
          </p>
          <div className="absolute left-10 pt-[250px]">
            <Image
              src={wind}
              alt={'Banner 1'}
              loading="lazy"
              className="rounded-tr-lg md:block hidden rounded-br-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 ">
          <TestimonyCard />
          <TestimonyCard2 />
        </div>
      </section>
    </main>
  );
};
