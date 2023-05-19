import { FC, ReactElement } from 'react';

export const LSubjectHeader: FC = (): ReactElement => {
  return (
    <header className="px-8 pb-6 pt-6 md:px-14 lg:px-16 mb-8">
      <h1 className=" h-7 text-neutral-800  mb-6 bg-neutral-200 animate-pulse rounded-md w-[360px]"></h1>
      <section className="flex flex-wrap gap-y-2 justify-between items-end">
        <main>
          <h1 className="mb-4 h-5 bg-neutral-200 animate-pulse rounded-md w-[360px]"></h1>
          <h1 className="mb-4 h-5 bg-neutral-200 animate-pulse rounded-md w-[300px]"></h1>
          <h1 className="mb-4 h-5 bg-neutral-200 animate-pulse rounded-md w-[280px]"></h1>
        </main>
        <aside>
          <div className="bg-neutral-200 rounded-md animate-pulse px-6 h-9 py-2 w-[180px] "></div>
        </aside>
      </section>
    </header>
  );
};
