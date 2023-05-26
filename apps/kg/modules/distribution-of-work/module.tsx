import { FC, ReactElement } from "react";
import Image from "next/image";
import search from "./assets/search.svg";
import mayora from "./assets/mayora.svg";

export const DistributionOfWorkModule: FC = (): ReactElement => {
  return (
    <main className="bg-neutral-100 h-screen px-[66px] py-[30px]">
      <section>
        <h1 className="text-[24px] font-bold">Penyaluran Kerja</h1>
        <div className="seacrh w-full h-[56px]  bg-neutral-200 dark:bg-[#232529] rounded-[8px] mt-[28px] flex items-center gap-4  ">
          <Image src={search} alt={"search"} className={"ml-[24px]"} />
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari Lowongan"
            className=" bg-neutral-200 w-full focus:outline-none"
          />
        </div>
      </section>
      <section className="flex gap-[60px]">
        <div className="bg-white w-[328px] h-auto rounded-md my-6 shadow-xl p-12 gap-3">
          <h1 className="text-[18px] font-bold">Daftar Lowongan</h1>
          <p className="text-neutral-500 py-3">
            Temukan beragam informasi karir yang menarik, hanya di halaman ini.
          </p>
          <h1 className="text-[18px] font-bold py-4">Urut Berdasarkan</h1>
          <div className="flex gap-2">
            <div className="flex justify-center items-center w-[124px] h-[36px] bg-neutral-100 border border-primary-500 text-primary-500 rounded-md">
              Paling Sesuai
            </div>
            <div className="flex justify-center items-center w-[120px] h-[36px] bg-neutral-100 border border-neutral-600 text-neutral-600 rounded-md ">
              Paling Baru
            </div>
          </div>
          <h1 className="text-[18px] font-bold py-6">Tipe Pekerjaan</h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
              </div>
              <p>Magang</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
              </div>
              <p>Full Time</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
              </div>
              <p>Part Time</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
              </div>
              <p>Freelance</p>
            </div>
          </div>
          <h1 className="text-[18px] font-bold py-6">Kota</h1>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
              </div>
              <p>Jakarta, Indonesia</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
              </div>
              <p>Tangerang, indonesia</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
              </div>
              <p>Yogyakarta, Indonesia</p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
              </div>
              <p>Bandung, Idonesia</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[28px]">
          <div className="flex flex-col bg-white w-[280px] h-[350px] rounded-md my-6 shadow-xl px-4">
            <div className="flex w-full justify-center">
              <Image src={mayora} alt="logo" />
            </div>
            <h1 className="text-primary-500 font-bold">Design Grafis</h1>
            <p className="text-primary-500 py-4">PT Mayora Indonesia</p>
            <p className="text-neutral-500 ">Kota Depok Jawa Barat</p>
            <p className="text-neutral-500">Rp 3.500.000 - 5.000.000</p>
            <p className="text-neutral-500">Full Time</p>
            <div className="bg-primary-100 my-4 text-primary-500 border border-primary-500 p-2 text-sm rounded-md">
              Terbuka hingga 26 Juni 2024
            </div>
          </div>
          <div className="bg-white w-[280px] h-[350px] rounded-md my-6 shadow-xl"></div>
          <div className="bg-white w-[280px] h-[350px] rounded-md my-6 shadow-xl"></div>
        </div>
      </section>
    </main>
  );
};
