import { FC, ReactElement } from "react";
import { TestimonyCard } from "./components";

export const TestimonySection: FC = (): ReactElement => {
  return (
    <main className="px-[70px] py-[135px] w-full h-auto">
      <section className="flex flex-col gap-y-[44px] px-[135px] h-full items-center justify-center">
        <div className="flex w-full gap-x-[30px]">
          <div className="flex flex-col w-2/3">
            <h1 className="my-[20px] tetx-[16px]">Testimoni</h1>
            <div className="flex flex-col gap-y-2">
              <h1 className="text-black font-[700] text-[36px]">
                Apa kata mahasiswa Kampus Gratis
              </h1>
              <p className="text-[16px] text-neutral-600 font-[400]">
                Kampus Gratis telah mencetak talenta hebat yang berkontribusi untuk negeri. Mari
                kita simak pendapat mereka terhadap kami
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-x-6">
            <TestimonyCard />
            <TestimonyCard />
          </div>
        </div>
      </section>
    </main>
  );
};
