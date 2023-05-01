import { FC, ReactElement } from 'react';

export const BannerSection: FC = (): ReactElement => {
  return (
    <section className="lg:px-20 md:px-10 px-5 py-3 w-full ">
      <div className="   bg-[#106FA4]  h-[212px] rounded-[8px]">
        <h1 className=" text-white pt-[61px] font-bold text-[28px] text-center ">
          Penugasan
        </h1>
        <p className=" text-white pt-[28px] font-semibold text-center">
          Selesaikan tugasmu tepat waktu dan dapatkan sertifikasinya!{' '}
        </p>
      </div>
    </section>
  );
};
