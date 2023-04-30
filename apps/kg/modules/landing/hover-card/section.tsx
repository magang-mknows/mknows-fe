import { FC, ReactElement } from 'react';

export const HoverCard: FC = (): ReactElement => {
  return (
    <section className="flex flex-col bg-white rounded-lg shadow-sm w-[313.7px] h-[131.09px] z-10 absolute 1xl:left-20 lg:left-0 2xl:left-[200px] bottom-16 py-[30px] pl-[30px] pr-[24.7px] gap-y-3 justify-between">
      <h1 className="text-[18px] font-[700]">Mahasiswa Kampus Gratis</h1>
      <div className="flex w-full">
        <div className="flex w-full">
          <div className="flex ml-[-10px] rounded-full border-2 border-white bg-error-base w-[40px] h-[40px]"></div>
          <div className="flex ml-[-10px] border-2 border-white rounded-full bg-success-base w-[40px] h-[40px]"></div>
          <div className="flex ml-[-10px] border-2 border-white rounded-full bg-warning-base w-[40px] h-[40px]"></div>
          <div className="flex ml-[-10px] border-2 border-white rounded-full bg-primary-base w-[40px] h-[40px]"></div>
          <div className="flex ml-[-10px] border-2 border-white flex items-center justify-center rounded-full bg-error-500 w-[40px] h-[40px]">
            <span className="text-white font-bold text-[30px]">+</span>
          </div>
        </div>
        <div className="flex justify-start w-1/3 flex-col">
          <h1 className="text-[15px] font-bold text-error-300">2185+</h1>
          <h1 className="text-black text-[15px] font-bold">Mahasiswa</h1>
        </div>
      </div>
    </section>
  );
};
