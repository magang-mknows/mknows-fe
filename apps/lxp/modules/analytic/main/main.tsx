import { FC, ReactElement } from 'react';

export const MainSection: FC = (): ReactElement => {
  return (
    <div>
      <main className="w-full col-span-3 lg:col-span-2 flex flex-col gap-6">
        <section className=" bg-neutral-50 py-6 px-8 w-full">
          <header className="mb-10 text-base font-bold border-b-[0.5px] border-neutral-300 pb-3">
            <h1>Analisa hasil belajar tiap Batch</h1>
          </header>
          <main className="grid grid-cols-3 gap-6">
            {/* <AnalyticGraph />
            <AnalyticIcon /> */}
          </main>
        </section>
        <section className="grid grid-cols-3 gap-7 min-h-[300px]">
          {/* <AnalyticRecentPerformance />
          <AnalyticPerformance /> */}
        </section>
      </main>
    </div>
  );
};
