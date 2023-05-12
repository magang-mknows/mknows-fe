import type { NextPage } from 'next';
import type { ReactElement } from 'react';

const RootPage: NextPage = (): ReactElement => {
  return (
    <section className="flex flex-col items-center w-full">
      <span className="text-6xl text-black">Anjay Mabar</span>
    </section>
  );
};

export default RootPage;
