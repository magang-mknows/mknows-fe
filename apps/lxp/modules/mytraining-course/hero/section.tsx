import Image from "next/image";
import { FC, ReactElement } from "react";

export const HeroSection: FC = (): ReactElement => {
  return (
    <div className="items-center mx-8 md:mx-14 lg:mx-16 bg-neutral-50 rounded-lg px-8 md:px-14 py-6 ">
      <h3 className="text-neutral-800  lg:text-[25px] text-[20px] text-center font-bold pt-[13px] pb-5">
        Pelatihan Keterampilan Komunikasi
      </h3>
      <div className="w-full h-[253px]">
        <Image
          src={
            "https://res.cloudinary.com/dvsqy8n1a/image/upload/v1682825462/sub_thumbnail_f7b760be-5193-4bd4-aaa6-b57322bdf347.png"
          }
          alt=""
          className="h-full object-cover rounded-lg mx-auto w-auto"
          width={100}
          height={100}
        />
      </div>
      <p className="text-sm font-normal text-neutral-800 text-justify py-10 ">
        Manajemen Keuangan belajar tentang bagaimana merencanakan, mengelola, serta menggunakan
        sumber daya keuangan perusahaan. Perkuliahan jurusan ini juga tentang lembaga perbankan,
        kinerja perusahaan, perpajakan, akuntansi, perdagangan internasional, perencanaan modal,
        asuransi, anggaran, analisis keuangan, akuisisi dana, manajemen utang dan aset, hingga
        portofolio dan manajemen investasi. Pengawasan berbagai aspek keuangan guna mencegah
        kesalahan atau kecurangan juga dipelajari selama kuliah.
      </p>
    </div>
  );
};
