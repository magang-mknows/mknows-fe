import { FC, ReactElement } from "react";
import Image from "next/image";
import Example1 from "../../assets/example1.svg";
import Example2 from "../../assets/example2.svg";

const tabel = [
  {
    no: 1,
    matkul: "Bahasa Inggris",
    img: Example1,
    jmlh_mahasiswa: 15,
    kode_matkul: "123456ASD",
    kategori: "Pre-Test",
    jmlh_sks: 4,
    keterangan: "Ditolak",
  },
  {
    no: 2,
    matkul: "Kalkulus",
    img: Example2,
    jmlh_mahasiswa: 21,
    kode_matkul: "18ASl22",
    kategori: "Draft KRS",
    jmlh_sks: 8,
    keterangan: "Disetujui",
  },
  {
    no: 2,
    matkul: "Informatika",
    img: Example1,
    jmlh_mahasiswa: 24,
    kode_matkul: "1234GG22",
    kategori: "Draft KRS",
    jmlh_sks: 5,
    keterangan: "Diproses",
  },
];

const TabelSubmission: FC = (): ReactElement => {
  return (
    <>
      <div className="p-8 overflow-auto whitespace-nowrap">
        <div className="grid grid-flow-row auto-rows-auto">
          {/* thead⬇️⬇️⬇️⬇️ */}
          <div className="grid grid-flow-col auto-cols-min mx-auto border bg-[#f3f4f6] border-[#e5e7eb] rounded-t-lg divide-neutral-400 dark:divide-gray-700 w-full text-[16px]">
          <div className="w-[89px] bg-[#f3f4f6] text-center md:text-[16px] rounded-md p-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
            No.
          </div>
          <div className="w-[358px] lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold col-span-4 lg:text-[16px] text-[10px] dark:bg-transparent">
            <p>Mata</p>
            <p> Kuliah</p>
          </div>
          <div className="w-[180px] lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
            <p>Kode </p>
            <p>Matkul</p>
          </div>
          <div className="w-[89px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] text-[10px] dark:bg-transparent">
            SKS
          </div>
          <div className="w-[180px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
            Kategori
          </div>
          <div className="w-[179px] bg-[#f3f4f6] lg:text-start text-center py-3 font-semibold md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
            Tindakan
          </div>
          </div>

          {tabel.map((x, i) => (
            <div key={i} className="grid grid-flow-col auto-cols-min mx-auto border border-[#e5e7eb] divide-neutral-400  dark:divide-gray-700 w-full text-[16px]">
              <div className="w-[89px] text-center md:text-[16px] p-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.no}
              </div>
              <div className="w-[358px] lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                <div className="lg:flex lg:justify-center w-full lg:gap-4 p-4">
                  <div>
                    <Image src={x.img} alt="User" />
                  </div>
                  <div className="flex w-full flex-col w-auto">
                    <h1 className="font-bold text-start">{x.matkul}</h1>
                    <p className="text-gray-400 text-start">
                      {x.jmlh_mahasiswa} Mahasiswa Terdaftar
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[180px] lg:flex md:flex md:gap-[4px] md:text-[16px] lg:gap-[4px] lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.kode_matkul}
              </div>
              <div className="w-[89px] lg:text-start text-center py-3 font-medium lg:text-[16px] text-[10px] dark:bg-transparent">
                {x.jmlh_sks}
              </div>
              <div className="w-[180px] lg:text-start text-center py-3 font-medium lg:text-[16px] md:text-[16px] text-[10px] dark:bg-transparent">
                {x.kategori}
              </div>
              <div className="w-[179px] flex gap-2 dark:divide-gray-700 lg:text-start text-center py-3 font-medium md:text-[16px] lg:text-[16px] text-[10px] dark:bg-transparent">
              {x.keterangan === "Disetujui" ? (
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.4997 0.583008C4.74967 0.583008 0.0830078 5.24967 0.0830078 10.9997C0.0830078 16.7497 4.74967 21.4163 10.4997 21.4163C16.2497 21.4163 20.9163 16.7497 20.9163 10.9997C20.9163 5.24967 16.2497 0.583008 10.4997 0.583008ZM8.41634 16.208L3.20801 10.9997L4.67676 9.53092L8.41634 13.2601L16.3226 5.35384L17.7913 6.83301L8.41634 16.208Z"
                        fill="#6AD26A"
                      />
                    </svg>
                  ) : x.keterangan === "Diproses" ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 10C0 4.47715 4.47715 0 10 0C15.5204 0.00597071 19.994 4.47963 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM13.1559 14.4025C13.4979 14.7061 14.0192 14.6833 14.3334 14.3508V14.3517C14.4825 14.1882 14.5605 13.9721 14.5502 13.7511C14.5399 13.53 14.4421 13.3222 14.2784 13.1733L10.4167 9.63332V5.41665C10.4167 4.95641 10.0436 4.58332 9.58336 4.58332C9.12312 4.58332 8.75002 4.95641 8.75002 5.41665V9.99998C8.75086 10.234 8.85005 10.4569 9.02336 10.6142L13.1559 14.4025Z"
                        fill="#FAB317"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.7913 2.17676L13.3226 0.708008L7.49967 6.53092L1.67676 0.708008L0.208008 2.17676L6.03092 7.99967L0.208008 13.8226L1.67676 15.2913L7.49967 9.46842L13.3226 15.2913L14.7913 13.8226L8.96842 7.99967L14.7913 2.17676Z"
                        fill="#EE2D24"
                      />
                    </svg>
                  )}

                  {x.keterangan}
              </div>
            </div>
          ))}
        </div>
        <div>
        </div>
      </div>
    </>
  );
};

export default TabelSubmission;