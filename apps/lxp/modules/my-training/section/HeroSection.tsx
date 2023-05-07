import Image from 'next/image';
import React, { ReactElement } from 'react';
import Matkul from '../assets/matkul.svg';
import Dummy from '../assets/Dummy.svg';

const HeroSection = (): ReactElement => {
  const hero = [
    {
      icon: Matkul,
      jumlah: '6',
      detail: 'pelatihan',
      warna: '#E3FBDA',
    },
    {
      icon: Matkul,
      jumlah: '144',
      detail: 'poin',
      warna: '#FEF6D0',
    },
    {
      icon: Matkul,
      jumlah: '3.187',
      detail: 'karyawan',
      warna: '#E9F6FD',
    },
  ];
  return (
    <div className="flex lg:flex-row flex-col gap-6 ">
      <div className="lg:basis-1/4 lg:justify-start justify-center sm:hidden lg:inline-block xs:inline-block">
        <Image
          src={Dummy}
          alt={'dummy'}
          className=" object-cover h-44 w-full lg:w-full lg:h-auto rounded-lg "
          width={100}
          height={100}
        />
      </div>
      <div className="flex flex-col">
        <h1 className="md:text-[28px] text-[22px] font-[700] text-[#171717]">
          Pelatihan Keterampilan Komunikasi
        </h1>
        <p className="text-[#525252] text-[14px] font-[400] py-2">
          Akuntasi adalah belajar cara memelihara keuangan. Ini mempersiapkan
          siswa untuk menjadi akuntan dengan mengajar mereka tentang
          prinsip-prinsip akuntansi seperti audit, pelaporan, penganggaran dan
          peraturan pajak.
        </p>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-rows-1 lg:gap-x-6 sm:gap-x-3 rounded-lg py-4 gap-y-4 lg:w-[75%] w-full">
          {hero.map((item, index) => {
            return (
              <div
                key={index}
                style={{ background: item.warna }}
                className="flex justify-start rounded-lg items-center gap-3 "
              >
                <Image
                  src={item.icon}
                  alt="icon"
                  className="w-8 h-8 lg:ml-7 md:ml-7 sm:ml-28 ml-10"
                  width={100}
                  height={100}
                />
                <div className="flex flex-col py-4 text-black">
                  <p className="text-[#262626] text-[16px] font-[600]">
                    {item.jumlah}
                  </p>
                  <p className="text-[#262626] text-[12px] font-[500]">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
