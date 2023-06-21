import { FC, ReactElement } from "react";
import { Card } from "@mknows-frontend-services/components/molecules";
import Image from "next/image";
import Pendaftar from "./assets/pendaftar.svg";
import Karyawan from "./assets/karyawan.svg";

export const InfoSection: FC = (): ReactElement => {
  return (
    <div className="mt-[61px] grid grid-cols-4 gap-[24px]">
      <Card
        className="bg-white shadow-[0_3px_23px_10px_rgb(150,150,150,0.1)] px-[20px] py-[28px] rounded"
        hasImage={false}
        children={
          <div className="flex">
            <Image src={Pendaftar} alt="tes" />
            <div className="px-[16px]">
              <p className="text-[24px] font-bold text-neutral-900">2500</p>
              <p>pendaftar</p>
            </div>
          </div>
        }
      />

      <Card
        className="bg-white shadow-[0_3px_23px_10px_rgb(150,150,150,0.1)] px-[20px] py-[28px] rounded"
        hasImage={false}
        children={
          <div className="flex">
            <Image src={Karyawan} alt="tes" />
            <div className="px-[16px]">
              <p className="text-[24px] font-bold text-neutral-900">1000</p>
              <p>pendaftar</p>
            </div>
          </div>
        }
      />

      <Card
        className="bg-white shadow-[0_3px_23px_10px_rgb(150,150,150,0.1)] px-[20px] py-[28px]  rounded"
        hasImage={false}
        children={
          <div className="flex">
            <Image src={Pendaftar} alt="tes" />
            <div className="px-[16px]">
              <p className="text-[24px] font-bold text-neutral-900">2500</p>
              <p>pendaftar</p>
            </div>
          </div>
        }
      />

      <Card
        className="bg-white shadow-[0_3px_23px_10px_rgb(150,150,150,0.1)] px-[20px] py-[28px] rounded"
        hasImage={false}
        children={
          <div className="flex">
            <Image src={Karyawan} alt="tes" />
            <div className="px-[16px]">
              <p className="text-[24px] font-bold text-neutral-900">1000</p>
              <p>pendaftar</p>
            </div>
          </div>
        }
      />
    </div>
  );
};
