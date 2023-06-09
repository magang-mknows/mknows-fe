import { atom, selector } from "recoil";
import { T } from "./type";
import icon1 from "./assets/icon1.svg";
import icon3 from "./assets/icon2.svg";
import icon4 from "./assets/icon4.svg";
import icon5 from "./assets/icon5.svg";
import icon6 from "./assets/icon6.svg";
import icon7 from "./assets/icon7.svg";
import icon8 from "./assets/icon8.svg";
import icon9 from "./assets/icon9.svg";
import icon10 from "./assets/icon10.svg";
import icon11 from "./assets/icon11.svg";
import icon12 from "./assets/icon12.svg";

export const semuaFiturState = atom<Array<T>>({
  key: "semua-fitur-state",
  default: [
    {
      id: 1,
      namaFitur: "Administrasi",
      icon: icon1,
      warna: "#E9F6FD",
      slug: "/administrasi",
      desc: "Fitur administrasi pada website KG berisi informasi dan fitur yang memungkinkan Kamu untuk bisa mengelola dan mengakses semua fitur pada website.",
    },
    {
      id: 2,
      namaFitur: "Rencana Studi",
      icon: icon3,
      warna: "#FEF6D0",
      slug: "/rencana-studi",
      desc: "Fitur Rencana studi pada website KG berisi informasi mengenai rencana dan jadwal pembelajaran yang akan diadakan.",
    },
    {
      id: 3,
      namaFitur: "Studi Ku",
      icon: icon1,
      warna: "#FEDBD7",
      slug: "/studi-ku",
      desc: "Fitur Studi Ku pada website KG memungkinkan kamu untuk mengetahui informasi dan riwayat pembelajaran yang telah kamu ikuti.",
    },
    {
      id: 4,
      namaFitur: "Nilai dan Sertifikat",
      icon: icon3,
      warna: "#E3FBDA",
      slug: "/nilai-dan-sertifikat",
      desc: "Fitur Nilai & sertifikat pada website KG berisi informasi mengenai nilai dan sertifikat yang kamu peroleh setelah menyelesaikan pembelajarn yang disediakan oleh website ini.",
    },
    {
      id: 5,
      namaFitur: "Penugasan",
      icon: icon4,
      warna: "#FEDBD7",
      slug: "/penugasan",
      desc: "Fitur Penugasan pada website KG memungkinkan kamu untuk mengetahui  informasi dan instruksi mengenai tugas atau pekerjaan yang harus dikerjakan oleh kamu dalam rangka menyelesaikan pembelajaran yang telah diambil di website KG.",
    },
    {
      id: 6,
      namaFitur: "Diskusi Global",
      icon: icon5,
      warna: "#E3FBDA",
      slug: "/ruang-diskusi",
      desc: "Diskusi Global pada Kampus Gratis memungkinkan kamu untuk berinteraksi dan berbagi pengalaman dengan pelajar lain serta mentor dalam lingkungan virtual.",
    },
    {
      id: 7,
      namaFitur: "Konsultasi & Layanan",
      icon: icon3,
      warna: "#FEF6D0",
      slug: "/konsultasi-dan-layanan",
      desc: "Fitur Konsultasi dan Layanan memberikan kesempatan bagi kamu untuk memperoleh bantuan dan panduan dari mentor secara personal dalam memahami materi pembelajaran.",
    },
    {
      id: 8,
      namaFitur: "Simulasi, Drill & Assessmen",
      icon: icon6,
      warna: "#E9F6FD",
      slug: "/simulasi-drill-dan-assestment",
      desc: "Fitur Simulasi, Drill, dan Asesmen memberikan pengalaman belajar yang interaktif dan menyeluruh bagi kamu dalam menguji dan meningkatkan pemahaman terhadap materi pembelajaran.",
    },
    {
      id: 9,
      namaFitur: "Kalender Saya",
      icon: icon1,
      warna: "#E9F6FD",
      slug: "/kalender-saya",
      desc: "Fitur Kalender Saya memungkinkan kamu untuk mengakses jadwal pembelajaran dan mengatur jadwal belajar kamu dengan mudah.",
    },
    {
      id: 10,
      namaFitur: "Papan Skor",
      icon: icon7,
      warna: "#FEF6D0",
      slug: "/papan-skor",
      desc: "Periksa skor kamu dan pantau kemajuan pengetahuan dan keterampilan kamu untuk mencapai hasil yang lebih maksimal",
    },
    {
      id: 11,
      namaFitur: "Analitik",
      icon: icon8,
      warna: "#FEDBD7",
      slug: "/analitik",
      desc: "Menganalisa penilaian kamu selama melakukan pembelajaran di Kampus Gratis untuk memastikan nilai mu tidak berada pada grafik menurun",
    },
    {
      id: 12,
      namaFitur: "Panduan",
      icon: icon9,
      warna: "#E3FBDA",
      slug: "/panduan",
      desc: "Fitur Panduan memberikan akses mudah dan cepat untuk informasi yang dibutuhkan, seperti aturan pelatihan, petunjuk teknis, dan cara mengakses fitur-fitur pada website KG.",
    },
    {
      id: 13,
      namaFitur: "Sekilas Ilmu",
      icon: icon10,
      warna: "#FEDBD7",
      slug: "/sekilas-ilmu",
      desc: "Dapatkan informasi menarik yang berguna untuk meningkatkan pengetahuan dan keterampilan kamu",
    },
    {
      id: 14,
      namaFitur: "Acara Kampus",
      icon: icon3,
      warna: "#E9F6FD",
      slug: "/acara-kampus",
      desc: "Ikuti beragam acara unik yang dirancang khusus untuk memberikan pengalaman belajar yang menyenangkan dan interaktif",
    },
    {
      id: 15,
      namaFitur: "Perencanaan Karir",
      icon: icon11,
      warna: "#E3FBDA",
      slug: "/perencanaan-karir",
      desc: "Fitur Perencanaan Karir dirancang khusus untuk membantu kamu mengembangkan keterampilan yang penting untuk kesuksesan dalam karir",
    },
    {
      id: 16,
      namaFitur: "Penyaluran Kerja",
      icon: icon12,
      warna: "#FEF6D0",
      slug: "/penyaluran-kerja",
      desc: "Kampus Gratis menyediakan layanan penyaluran kerja yang membantumu terhubung dengan peluang kerja yang relevan sesuai dengan keterampilan yang telah diperoleh melalui pembelajaran di Kampus Gratis.",
    },
  ],
});

export const querySemuaFitur = atom({
  key: "query-semua-fitur",
  default: "",
});

export const filterSemuaFitur = selector({
  key: "filter-semua-fitur",
  get: ({ get }) =>
    get(semuaFiturState).filter((item) =>
      item.namaFitur.toLowerCase().includes(get(querySemuaFitur).toLowerCase()),
    ),
});
