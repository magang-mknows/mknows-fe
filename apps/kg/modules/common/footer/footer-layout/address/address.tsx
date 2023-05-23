import { FC, ReactElement } from 'react';

export const FooterAddress: FC = (): ReactElement => {
  return (
    <div className=" text-neutral-900">
      <h1 className="mb-3 lg:mb-2 font-black text-base font-bold">Alamat</h1>
      <span className="font-bold py-2">PT Menara Indonesia</span>
      <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
        <li className="flex gap-2 ">
          <section className="min-w-[70px] flex justify-between">
            <span>Utama</span>
            <span>:</span>
          </section>
          <span>
            Jl. Radio IV No.8B, Kramat Pela,Kebayoran Baru, Kota Jakarta
            Selatan, Jakarta 12130
          </span>
        </li>
        <li className="flex gap-2 ">
          <section className="min-w-[70px] flex justify-between">
            <span>Cabang</span>
            <span>:</span>
          </section>
          <span>
            Jl. Cireundeu Raya No. 59 ,Ciputat Timur, Tangerang Selatan, Banten
            15419
          </span>
        </li>
      </ul>
    </div>
  );
};
