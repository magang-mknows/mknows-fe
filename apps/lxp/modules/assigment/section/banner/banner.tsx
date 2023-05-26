import { FC, ReactElement } from "react";

const BannerAssigmentSection: FC = (): ReactElement => {
  return (
    <section className="lg:px-20 md:px-10 px-5 py-3 w-full mt-[50px] ">
      <div className="   bg-[#053D38]  h-[212px] rounded-[8px]">
        <h1 className=" text-[#fff] pt-[61px] font-bold text-[25px] text-center ">Penugasan</h1>
        <p className=" text-[#fff] pt-[28px] font-semibold text-center">
          Selesaikan tugasmu tepat waktu dan dapatkan sertifikasinya!{" "}
        </p>
      </div>
    </section>
  );
};

export default BannerAssigmentSection;
