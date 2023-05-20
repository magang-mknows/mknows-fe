import { atom, selector } from 'recoil';
import { TResultDataDummy } from './types';

export const icon = atom<string[]>({
  key: 'request-data-icons',
  default: [
    '/assets/dashboard/card1.svg',
    '/assets/dashboard/card2.svg',
    '/assets/dashboard/card3.svg',
    '/assets/dashboard/card4.svg',
    '/assets/dashboard/card2.svg',
    '/assets/dashboard/card1.svg',
    '/assets/dashboard/card4.svg',
    '/assets/dashboard/card3.svg',
    '/assets/dashboard/card4.svg',
    '/assets/dashboard/card3.svg',
    '/assets/dashboard/card2.svg',
    '/assets/dashboard/card1.svg',
    '/assets/dashboard/card4.svg',
    '/assets/dashboard/card2.svg',
    '/assets/dashboard/card1.svg',
    '/assets/dashboard/card4.svg',
  ],
});

export const resultSearch = atom({
  key: 'result-query',
  default: '',
});

export const resultOption = atom({
  key: 'result-option-query',
  default: '',
});

export const resultDummyData = atom<TResultDataDummy[]>({
  key: 'result-dummy-data',
  default: [
    {
      no: 10002345,
      nik: 327000189266,
      nama: 'Albert Maniqueen',
      tggl_permintaan: '11/2/2021',
      waktu_permintaan: '09:22:30',
      tggl_selesai: '11/2/2021',
      waktu_selesai: '09:22:30',
      kendala_proses: '-',
      skor: 'Sangat Baik',
      detail: 'Lihat Detail',
      jenis_produk: 'AI Identity Scoring',
      jumlah_kuota: 20,
      status: 'Menunggu',
      jumlah_user: 4,
    },
    {
      no: 11122334,
      nik: 32356789,
      nama: 'Ludwig Bethoven',
      tggl_permintaan: '15/3/2022',
      waktu_permintaan: '09:22:30',
      tggl_selesai: '11/2/2023',
      waktu_selesai: '09:22:30',
      kendala_proses: 'NIK salah',
      skor: 'Cukup Buruk',
      detail: 'Lihat Detail',
      jenis_produk: 'AI Character Scoring',
      jumlah_kuota: 50,
      status: 'Menunggu',
      jumlah_user: 12,
    },
    {
      no: 123578912,
      nik: 3278532111,
      nama: 'Jawadal Al Hilal',
      tggl_permintaan: '11/8/2021',
      waktu_permintaan: '09:22:30',
      tggl_selesai: '11/2/2024',
      waktu_selesai: '09:22:30',
      kendala_proses: 'Kualitas KTP buruk',
      skor: '-',
      detail: 'Lihat Detail',
      jenis_produk: 'AI Capability Scoring',
      jumlah_kuota: 200,
      status: 'Gagal',
      jumlah_user: 20,
    },
    {
      no: 10002345,
      nik: 327000189266,
      nama: 'Yasmin Siahaan',
      tggl_permintaan: '11/2/2021',
      waktu_permintaan: '09:22:30',
      tggl_selesai: '11/2/2021',
      waktu_selesai: '09:22:30',
      kendala_proses: '-',
      skor: 'Sangat Buruk',
      detail: 'Lihat Detail',
      jenis_produk: 'AI Credit Scoring',
      jumlah_kuota: 250,
      status: 'Gagal',
      jumlah_user: 10,
    },
  ],
});

export const resultFilter = selector({
  key: 'result-filter',
  get: ({ get }) =>
    get(resultDummyData).filter(
      (user) =>
        user.nama.toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.skor.toLowerCase().includes(get(resultSearch).toLowerCase()) ||
        user.tggl_permintaan
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase()) ||
        user.tggl_selesai
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase()) ||
        user.jenis_produk
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase()) ||
        user.nik
          .toString()
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase()) ||
        user.no
          .toString()
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase()) ||
        user.jumlah_user
          .toString()
          .toLowerCase()
          .includes(get(resultSearch).toLowerCase())
    ),
});
