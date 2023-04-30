import { FC, ReactElement } from 'react';

export const HeroSection: FC = (): ReactElement => {
  return (
    <section className="flex w-full justify-between py-[118px] px-[70px] h-screen">
      <div className="flex w-1/2">
        <h1>Ini Gambar</h1>
      </div>
      <div className="flex w-1/2">
        <h1>Ini Keterangan</h1>
      </div>
    </section>
  );
};
