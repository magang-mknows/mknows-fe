import Image from "next/image";
import { FC, ReactElement } from "react";
import G1 from "./assets/g1.png";
import bg from "./assets/bg.png";
import vector from "./assets/Vector.png";

export const GlimpseAlternatif: FC = (): ReactElement => {
  return (
    <main>
      <div className="flex absolute w-full z-0">
        <Image src={bg} alt={"tes"} />
      </div>
      <section className="flex gap-x-12 relative z-40 py-10 flex-col md:flex-row  px-6 md:px-[70px] w-full justify-center items-center">
        <section className="flex flex-col w-full gap-y-6 pt-16">
          <h1 className=" text-white md:text-[44px] text-[36px] font-bold">
            Sekilas Info <span className="text-yellow-500">Kampus Gratis</span>
          </h1>

          <p className="text-white text-[18px] w-full">
            <strong className="text-1xl"> Kampus Gratis disingkat KG </strong>
            Kampus Gratis bekerjasama dengan perguruan tinggi yang berkualitas, dimana seluruh
            pembelajaran di KG, baik berupa : (1) Perkuliahan, (2) Pelatihan, (3) Magang maupun (4)
            Pengalaman kerja dari siswa akan dikonversi menjadi SKS untuk memperoleh Ijazah
            Pendidikan tinggi setara S1 dan S2. Team KG didukung sepenuhnya oleh M-Knows Consulting,
            konsultan manajemen nasional yang berumur lebih dari 20 tahun.
            <br />
            <br />
            Dengan kekuatan dibidang solusi manajemen dan edukasi, M-Knows Konsisten dalam bidang
            Pelatihan, LMS & LXP, Solusi Artificial Intelligence bagi bisnis dan pendidikan,
            pengembangan Photorealistic VR Dari itu Kampus Gratis atau disingkat KG, mengadopsi
            aturan baru dari merdeka belajar depdikbud, seperti Magang, Studi independent
            Bersertifikat (MSIB) dan Rekognisi Pembelajaran Lampau (RPL).
          </p>
          <button className="text-white text-[18px] m-8">Lihat Semua</button>
        </section>
        <div>
          <div className="flex w-full justify-end">
            <Image
              src={vector}
              alt="g1"
              width={500}
              height={500}
              className="w-auto h-auto justify-end"
            />
            <Image
              src={vector}
              alt="g1"
              width={500}
              height={500}
              className="w-auto h-auto justify-end"
            />
          </div>
          <Image src={G1} alt="g1" width={700} height={700} />
        </div>
      </section>
    </main>
  );
};
