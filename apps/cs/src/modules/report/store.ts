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
      tggl_permintaan: "11/2/2021",
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
      tggl_permintaan: "15/3/2022",
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
      tggl_permintaan: "11/8/2021",
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
      status: "Sangat Buruk",
      tggl_permintaan: "11/2/2021",
      waktu_permintaan: "09:22:30",
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
