import { atom, selector } from "recoil";
import { TReportDataDummy } from "./type";

export const reportSearch = atom({
  key: "report-query",
  default: "",
});

export const reportDummyData = atom<TReportDataDummy[]>({
  key: "report-dummy-data",
  default: [
    {
      no: 100025,
      nik: 327000189266,
      nama: "Ludwig van Biethoven",
      status: "Sangat Baik",
      tggl_permintaan: "Senin, 11 Juni 2023 ",
      waktu_permintaan: "09:22:30",
      tggl_selesai: "11/2/2021",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Identity Scoring",
      jumlah_user: 4,
    },
    {
      no: 1238777,
      nik: 327012111,
      nama: "Putri Santoso",
      status: "Cukup Buruk",
      tggl_permintaan: "Jumat, 9 Juni 2023 ",
      waktu_permintaan: "09:22:30",
      tggl_selesai: "11/2/2023",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Character Scoring",
      jumlah_user: 12,
    },
    {
      no: 13290000,
      nik: 327000189266,
      nama: "Albert Maniqueen",
      status: "Sangat Baik",
      tggl_permintaan: "Jumat, 18 Juni 2023 ",
      waktu_permintaan: "09:22:30",
      tggl_selesai: "11/2/2024",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Capability Scoring",
      jumlah_user: 5,
    },
    {
      no: 16788800,
      nik: 327012111,
      nama: "Yasmin Sumbul",
      status: "Cukup Buruk",
      tggl_permintaan: "Rabu, 24 Juni 2023 ",
      waktu_permintaan: "09:22:30",
      tggl_selesai: "11/2/2021",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Credit Scoring",
      jumlah_user: 10,
    },
    {
      no: 1266681929,
      nik: 264900990755644,
      nama: "Mr. Juan Spinka-Tremblay",
      status: "Sangat Buruk",
      tggl_permintaan: "Jumat, 9 Juni 2023 ",
      waktu_permintaan: "pukul 07.33",
      tggl_selesai: "11/2/2021",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Credit Scoring",
      jumlah_user: 10,
    },
    {
      no: 12668,
      nik: 73832169451,
      nama: "Tyler Watsica",
      status: "Sangat Baik",
      tggl_permintaan: "Jumat, 9 Juni 2023 ",
      waktu_permintaan: "pukul 07.33",
      tggl_selesai: "11/2/2021",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Credit Scoring",
      jumlah_user: 10,
    },
    {
      no: 126743,
      nik: 5045414518404,
      nama: "Karen Legros",
      status: "Sangat Buruk",
      tggl_permintaan: "Rabu, 14 Juni 2023 ",
      waktu_permintaan: "pukul 07.33",
      tggl_selesai: "11/2/2021",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Credit Scoring",
      jumlah_user: 10,
    },
    {
      no: 126743,
      nik: 92045411405772,
      nama: "Doyle Strosin",
      status: "Sangat Buruk",
      tggl_permintaan: "Rabu, 14 Juni 2023 ",
      waktu_permintaan: "pukul 07.33",
      tggl_selesai: "11/2/2021",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Credit Scoring",
      jumlah_user: 10,
    },
    {
      no: 100025,
      nik: 327000189266,
      nama: "Mr. Gerald Gusikowski",
      status: "Sangat Baik",
      tggl_permintaan: "Senin, 11 Juni 2023 ",
      waktu_permintaan: "09:22:30",
      tggl_selesai: "11/2/2021",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Identity Scoring",
      jumlah_user: 4,
    },
    {
      no: 13290000,
      nik: 327000189266,
      nama: "Marcus Grady II",
      status: "Sangat Baik",
      tggl_permintaan: "Jumat, 18 Juni 2023 ",
      waktu_permintaan: "09:22:30",
      tggl_selesai: "11/2/2024",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Capability Scoring",
      jumlah_user: 5,
    },
    {
      no: 1238777,
      nik: 327012111,
      nama: "Samuel Breitenberg",
      status: "Cukup Buruk",
      tggl_permintaan: "Jumat, 9 Juni 2023 ",
      waktu_permintaan: "09:22:30",
      tggl_selesai: "11/2/2023",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Character Scoring",
      jumlah_user: 12,
    },
    {
      no: 126743,
      nik: 92045411405772,
      nama: "Lena Friesen",
      status: "Sangat Buruk",
      tggl_permintaan: "Rabu, 14 Juni 2023 ",
      waktu_permintaan: "pukul 07.33",
      tggl_selesai: "11/2/2021",
      waktu_selesai: "09:22:30",
      jenis_produk: "AI Credit Scoring",
      jumlah_user: 10,
    },
  ],
});

export const reportFilter = selector({
  key: "report-filter",
  get: ({ get }) =>
    get(reportDummyData).filter(
      (report) =>
        report.nama.toLowerCase().includes(get(reportSearch).toLowerCase()) ||
        report.nik.toString().toLowerCase().includes(get(reportSearch).toLowerCase()),
    ),
});
